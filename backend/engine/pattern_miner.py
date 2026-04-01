"""
pattern_miner.py — Multi-platform pattern mining with content mix breakdown.
"""


def mine_patterns(posts: list[dict], platform: str = "twitter") -> dict:
    total = len(posts)
    overall_avg = sum(p["engagement_score"] for p in posts) / max(total, 1)
    top_posts = [p for p in posts if p["tier"] == "top_performer"]
    top_total = max(len(top_posts), 1)

    result = {}

    for dimension in ["category", "hook_type"]:
        groups = {}
        for post in posts:
            label = post.get("classification", {}).get(dimension, "unknown")
            if label not in groups:
                groups[label] = {"posts": [], "top_count": 0}
            groups[label]["posts"].append(post)
            if post["tier"] == "top_performer":
                groups[label]["top_count"] += 1

        dim_stats = {}
        for label, data in groups.items():
            count = len(data["posts"])
            avg_eng = sum(p["engagement_score"] for p in data["posts"]) / max(count, 1)
            dim_stats[label] = {
                "count": count,
                "usage_share": round(count / total, 2),
                "avg_engagement": round(avg_eng),
                "top_share": round(data["top_count"] / top_total, 2),
                "engagement_multiplier": round(avg_eng / overall_avg, 1) if overall_avg > 0 else 0,
            }
        result[dimension] = dim_stats

    result["overall_avg_engagement"] = round(overall_avg)
    result["total_posts"] = total
    result["top_performer_count"] = len(top_posts)

    # Content mix — sorted by usage
    content_mix = []
    for label, data in sorted(result.get("category", {}).items(), key=lambda x: x[1]["usage_share"], reverse=True):
        content_mix.append({
            "name": label,
            "count": data["count"],
            "percentage": int(data["usage_share"] * 100),
            "multiplier": data["engagement_multiplier"],
        })
    result["content_mix"] = content_mix

    # Strongest themes (top 3 by engagement)
    sorted_cats = sorted(result.get("category", {}).items(), key=lambda x: x[1]["avg_engagement"], reverse=True)
    result["strongest_themes"] = [name for name, _ in sorted_cats[:3]]

    return result


def find_key_patterns(pattern_data: dict) -> dict:
    findings = {}

    for dimension in ["category", "hook_type"]:
        stats = pattern_data.get(dimension, {})
        if not stats:
            continue

        by_engagement = sorted(stats.items(), key=lambda x: x[1]["avg_engagement"], reverse=True)
        by_usage = sorted(stats.items(), key=lambda x: x[1]["usage_share"], reverse=True)

        findings[dimension] = {
            "best_performer": by_engagement[0] if by_engagement else None,
            "worst_performer": by_engagement[-1] if by_engagement else None,
            "most_used": by_usage[0] if by_usage else None,
            "least_used": by_usage[-1] if by_usage else None,
        }

        for label, data in stats.items():
            if data["engagement_multiplier"] >= 1.5 and data["usage_share"] <= 0.20:
                findings[dimension]["underused_winner"] = (label, data)
                break

        for label, data in stats.items():
            if data["usage_share"] >= 0.25 and data["engagement_multiplier"] <= 0.7:
                findings[dimension]["overused_loser"] = (label, data)
                break

    return findings
