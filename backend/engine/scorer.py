"""
scorer.py — Platform-aware engagement scoring with confidence levels.
"""


PLATFORM_WEIGHTS = {
    "twitter":   {"likes": 1, "comments": 2, "shares": 3},
    "instagram": {"likes": 1, "comments": 3, "shares": 4},
    "linkedin":  {"likes": 1, "comments": 3, "shares": 4},
    "youtube":   {"likes": 1, "comments": 2, "shares": 3},
}


def score_posts(posts: list[dict], platform: str = "twitter") -> list[dict]:
    weights = PLATFORM_WEIGHTS.get(platform, PLATFORM_WEIGHTS["twitter"])

    for post in posts:
        post["engagement_score"] = (
            post.get("likes", 0) * weights["likes"]
            + post.get("comments", 0) * weights["comments"]
            + post.get("shares", 0) * weights["shares"]
        )

    scores = sorted([p["engagement_score"] for p in posts])
    total = len(scores)

    for post in posts:
        score = post["engagement_score"]
        rank = sum(1 for s in scores if s <= score)
        post["percentile"] = round((rank / total) * 100)

        if post["percentile"] >= 75:
            post["tier"] = "top_performer"
        elif post["percentile"] >= 25:
            post["tier"] = "average"
        else:
            post["tier"] = "underperformer"

    return posts


def get_confidence(post_count: int) -> dict:
    if post_count >= 30:
        return {
            "level": "high",
            "label": "High Confidence",
            "message": "Comprehensive analysis based on strong data.",
        }
    elif post_count >= 10:
        return {
            "level": "medium",
            "label": "Moderate Confidence",
            "message": "We found early patterns, but more content will improve accuracy.",
        }
    else:
        return {
            "level": "low",
            "label": "Early Signal",
            "message": "This is an early signal report based on limited content.",
        }
