"""
diagnosis.py — Confidence-aware, platform-specific strategy diagnosis.

Generates insights, mistakes, and actions — each with insight/evidence/action structure.
"""

PLATFORM_LABELS = {
    "twitter": "Twitter/X",
    "instagram": "Instagram",
    "linkedin": "LinkedIn",
    "youtube": "YouTube",
}


def diagnose(pattern_data: dict, key_patterns: dict, platform: str = "twitter", confidence_level: str = "high") -> dict:
    insights = []
    mistakes = []
    actions = []

    overall_avg = pattern_data.get("overall_avg_engagement", 1)
    cat_stats = pattern_data.get("category", {})
    hook_stats = pattern_data.get("hook_type", {})
    cat_patterns = key_patterns.get("category", {})
    hook_patterns = key_patterns.get("hook_type", {})
    plat = PLATFORM_LABELS.get(platform, "this platform")

    qualifier = "" if confidence_level == "high" else "Early signals suggest: "

    # ─── INSIGHTS ───

    if cat_patterns.get("best_performer"):
        label, data = cat_patterns["best_performer"]
        m = data["engagement_multiplier"]
        if m >= 1.3:
            insights.append({
                "insight": f"{qualifier}Your {_fmt(label)} content on {plat} performs {m}x better than your average.",
                "evidence": f"Across your posts, {_fmt(label)} consistently ranks in your top tier with {int(data['top_share']*100)}% of your best-performing content.",
                "action": f"Make {_fmt(label)} your primary content style this month.",
            })

    if hook_patterns.get("best_performer"):
        label, data = hook_patterns["best_performer"]
        m = data["engagement_multiplier"]
        if m >= 1.2:
            insights.append({
                "insight": f"{qualifier}Posts with {_fmt(label)} hooks generate {m}x more engagement.",
                "evidence": f"This hook type appears in {int(data['usage_share']*100)}% of your posts but drives {int(data['top_share']*100)}% of top performers.",
                "action": f"Use {_fmt(label)} hooks in your next 3 posts.",
            })

    strongest = pattern_data.get("strongest_themes", [])
    if len(strongest) >= 2:
        insights.append({
            "insight": f"{qualifier}Your strongest themes are {_fmt(strongest[0])} and {_fmt(strongest[1])}.",
            "evidence": f"These content categories consistently outperform your other categories.",
            "action": f"Build your content calendar around these two pillars.",
        })

    while len(insights) < 3:
        insights.append({
            "insight": f"Your audience on {plat} engages most with content that feels personal and specific.",
            "evidence": "Posts with specific details and personal elements outperform generic content.",
            "action": "Add personal stories or specific examples to each post.",
        })

    # ─── MISTAKES ───

    if cat_patterns.get("overused_loser"):
        label, data = cat_patterns["overused_loser"]
        usage_pct = int(data["usage_share"] * 100)
        top_pct = int(data["top_share"] * 100)
        mistakes.append({
            "insight": f"You over-index on {_fmt(label)} content even though it underperforms.",
            "evidence": f"It makes up {usage_pct}% of your posts but only {top_pct}% of top performers ({data['engagement_multiplier']}x avg engagement).",
            "action": f"Reduce {_fmt(label)} posts from {usage_pct}% to under 20% of your content mix.",
        })

    if cat_patterns.get("underused_winner"):
        label, data = cat_patterns["underused_winner"]
        usage_pct = int(data["usage_share"] * 100)
        m = data["engagement_multiplier"]
        mistakes.append({
            "insight": f"Your {_fmt(label)} content crushes it ({m}x), but you barely post it.",
            "evidence": f"Only {usage_pct}% of your posts are {_fmt(label)}, yet it's one of your highest-performing categories.",
            "action": f"Increase {_fmt(label)} content to at least 25% of your posting mix.",
        })

    # Hook mismatch
    worst_hook = hook_patterns.get("worst_performer")
    most_used_hook = hook_patterns.get("most_used")
    if worst_hook and most_used_hook:
        worst_label, worst_data = worst_hook
        most_label, most_data = most_used_hook
        if worst_label == most_label and worst_data["engagement_multiplier"] < 0.9:
            mistakes.append({
                "insight": f"Your most-used hook type ({_fmt(worst_label)}) is also your weakest.",
                "evidence": f"It generates only {worst_data['engagement_multiplier']}x avg engagement but makes up {int(most_data['usage_share']*100)}% of your posts.",
                "action": f"Rotate to {_fmt(hook_patterns['best_performer'][0])} hooks to break the pattern.",
            })

    # Platform-specific mistake
    _add_platform_mistake(mistakes, cat_stats, platform)

    while len(mistakes) < 3:
        mistakes.append({
            "insight": "Your recent content is becoming repetitive in structure.",
            "evidence": "Audiences notice patterns quickly. Format repetition leads to engagement fatigue.",
            "action": "Experiment with a content format you've never tried before this week.",
        })

    # ─── ACTIONS ───

    if cat_patterns.get("underused_winner") and cat_patterns.get("overused_loser"):
        winner_label, winner_data = cat_patterns["underused_winner"]
        loser_label, loser_data = cat_patterns["overused_loser"]
        actions.append({
            "issue": f"Too much {_fmt(loser_label)}, not enough {_fmt(winner_label)}",
            "evidence": f"{_fmt(loser_label)} = {int(loser_data['usage_share']*100)}% of posts, {int(loser_data['top_share']*100)}% of top content. {_fmt(winner_label)} = {int(winner_data['usage_share']*100)}% of posts but {winner_data['engagement_multiplier']}x engagement.",
            "action": f"Replace 2 of your next 5 {_fmt(loser_label)} posts with {_fmt(winner_label)} content.",
            "example": _get_example(winner_label, platform),
        })

    if hook_patterns.get("best_performer"):
        best_hook, best_data = hook_patterns["best_performer"]
        actions.append({
            "issue": "Your hooks aren't optimized",
            "evidence": f"{_fmt(best_hook)} hooks get {best_data['engagement_multiplier']}x engagement but you only use them {int(best_data['usage_share']*100)}% of the time.",
            "action": f"Open your next 3 posts with a {_fmt(best_hook)} hook.",
            "example": _get_hook_example(best_hook),
        })

    if cat_patterns.get("best_performer"):
        best_label, best_data = cat_patterns["best_performer"]
        actions.append({
            "issue": f"Double down on {_fmt(best_label)}",
            "evidence": f"Your {_fmt(best_label)} content generates {best_data['engagement_multiplier']}x your average. This is clearly what resonates on {plat}.",
            "action": f"Create a {_fmt(best_label)} post this week that goes deeper than usual.",
            "example": _get_example(best_label, platform),
        })

    while len(actions) < 3:
        actions.append({
            "issue": "Experiment with a new angle",
            "evidence": "Your content patterns have become predictable.",
            "action": "Try a format you've never used before this week.",
            "example": "Write a contrarian take on something your industry treats as gospel.",
        })

    # Strategy summary
    best_cat = cat_patterns.get("best_performer", (None, None))
    worst_cat = cat_patterns.get("overused_loser") or cat_patterns.get("worst_performer", (None, None))
    summary = _build_summary(best_cat, worst_cat, platform, pattern_data["total_posts"])

    return {
        "insights": insights[:3],
        "mistakes": mistakes[:3],
        "actions": actions[:3],
        "strategy_summary": summary,
    }


def _fmt(label: str) -> str:
    return label.replace("_", " ")


def _add_platform_mistake(mistakes, cat_stats, platform):
    if platform == "youtube":
        edu = cat_stats.get("educational", {})
        if edu and edu.get("usage_share", 0) >= 0.35:
            mistakes.append({
                "insight": "Your YouTube is too tutorial-heavy.",
                "evidence": f"Tutorials are {int(edu['usage_share']*100)}% of your videos but generate only {edu.get('engagement_multiplier', 1)}x avg engagement.",
                "action": "Balance tutorials with opinion-driven or story-driven videos.",
            })
    elif platform == "instagram":
        lifestyle = cat_stats.get("lifestyle", {})
        if not lifestyle:
            edu = cat_stats.get("educational", {})
            if edu and edu.get("usage_share", 0) >= 0.30:
                mistakes.append({
                    "insight": "Your Instagram leans too heavily on education.",
                    "evidence": f"Educational posts are {int(edu['usage_share']*100)}% of content but are not your strongest format.",
                    "action": "Mix in more personal stories and opinion-led content.",
                })
    elif platform == "linkedin":
        auth = cat_stats.get("authority_building", {})
        if auth and auth.get("usage_share", 0) >= 0.30 and auth.get("engagement_multiplier", 1) < 1.2:
            mistakes.append({
                "insight": "Your authority-building posts are generic.",
                "evidence": f"They make up {int(auth['usage_share']*100)}% of posts but only generate {auth.get('engagement_multiplier', 1)}x engagement.",
                "action": "Add specific numbers, client stories, and unique frameworks.",
            })


def _get_example(category: str, platform: str) -> str:
    examples = {
        "personal_story": {
            "twitter": "Share a specific failure from this year and the one lesson that came from it.",
            "instagram": "Post a raw, unedited photo with a story about a real struggle you went through.",
            "linkedin": "Write about a career decision that scared you and how it turned out.",
            "youtube": "Film a video about your biggest mistake and what you'd tell your past self.",
        },
        "opinion": {
            "twitter": "Challenge the most common advice in your industry. Be specific about why it's wrong.",
            "instagram": "Post a text-heavy carousel disagreeing with a popular trend in your niche.",
            "linkedin": "Write a post starting with 'Unpopular opinion:' about a standard practice in your field.",
            "youtube": "Make a video titled 'Why [common advice] is wrong' with your counter-argument.",
        },
        "contrarian": {
            "twitter": "Tweet the opposite of what everyone in your space is saying right now.",
            "instagram": "Create a reel that challenges a widely-accepted belief in your niche.",
            "linkedin": "Post a contrarian view on a trending professional topic.",
            "youtube": "Film a response video disagreeing with a popular creator's advice.",
        },
    }
    return examples.get(category, {}).get(platform, f"Create a specific, honest {_fmt(category)} piece this week.")


def _get_hook_example(hook_type: str) -> str:
    examples = {
        "confession": "Start with: 'I almost quit last month. Here's what changed my mind.'",
        "bold_claim": "Start with: 'Everything experts tell you about [X] is wrong.'",
        "question": "Start with: 'What if the thing holding you back is the strategy you're most proud of?'",
        "curiosity_gap": "Start with: 'Nobody is talking about this, but it changed everything for me.'",
        "result_proof": "Start with: 'After [X result], here's the one thing that actually mattered.'",
        "how_to": "Start with: 'How to [achieve result] without [painful thing].'",
        "list_number": "Start with: '7 things I wish I knew before [milestone].'",
        "warning": "Start with: 'This common mistake is killing your growth.'",
        "story_opener": "Start with: 'Last Tuesday, something happened that I can't stop thinking about.'",
    }
    return examples.get(hook_type, "Open with something personal and unexpected.")


def _build_summary(best_cat, worst_cat, platform: str, total: int) -> str:
    plat = PLATFORM_LABELS.get(platform, "this platform")

    if best_cat and best_cat[0] and worst_cat and worst_cat[0]:
        best_name = _fmt(best_cat[0])
        worst_name = _fmt(worst_cat[0])
        best_mult = best_cat[1]["engagement_multiplier"] if best_cat[1] else "?"
        return (
            f"Based on {total} posts analyzed on {plat}, your strongest content type is "
            f"{best_name} ({best_mult}x avg engagement). You're currently over-investing in "
            f"{worst_name} content, which isn't delivering results. Shifting your content mix "
            f"toward {best_name} and using stronger hooks will likely produce the biggest "
            f"improvement in your engagement."
        )

    return (
        f"Based on {total} posts on {plat}, we identified clear patterns in what works "
        f"and what doesn't. Follow the recommendations above to optimize your content strategy."
    )
