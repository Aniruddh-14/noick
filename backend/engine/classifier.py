"""
classifier.py — Expanded multi-platform post classification.

Categories: educational, personal_story, opinion, motivational, entertaining,
            contrarian, authority_building, promotional, listicle
Hooks: question, bold_claim, confession, list_number, curiosity_gap,
       warning, how_to, result_proof, story_opener, statement
"""

import re


def classify_post(post: dict, platform: str = "twitter") -> dict:
    text = post.get("text", "") + " " + post.get("description", "")
    hook = _extract_hook(post.get("text", ""))

    return {
        "category": _classify_category(text, platform),
        "hook_type": _classify_hook(hook),
        "length": _classify_length(text),
        "hook": hook,
    }


def _extract_hook(text: str) -> str:
    sentences = re.split(r'(?<=[.!?])\s+', text.strip())
    first = sentences[0] if sentences else text[:120]
    return first[:140]


def _classify_category(text: str, platform: str) -> str:
    t = text.lower()

    # Personal story — strong signal words
    story_signals = [
        "i failed", "i got fired", "i was rejected", "i turned down",
        "last year i", "here's what happened", "my co-founder quit",
        "the turning point", "i almost quit", "best thing that ever happened",
        "changed everything", "the messy", "honest story", "i almost followed",
        "nobody tells you", "almost quit everything", "one year ago",
        "the dm that changed", "first linkedin post got 3 likes",
        "i went from 0", "my biggest", "never again", "3 years of regret",
        "day in the life", "full story", "saved my channel",
        "couldn't afford rent",
    ]
    if any(s in t for s in story_signals):
        return "personal_story"

    # Contrarian — specific phrasing
    contrarian_signals = [
        "unpopular opinion", "controversial:", "the truth nobody",
        "most .* advice is wrong", "stop watching .* tutorials",
        "why i'll never use ai", "doesn't care about you",
    ]
    if any(re.search(s, t) for s in contrarian_signals):
        return "contrarian"

    # Opinion / hot take
    opinion_signals = [
        "hot take", "is overrated", "is killing", "is garbage",
        "is dead", "stop optimizing", "nobody talks about",
        "making everyone sound the same", "the real moat",
        "dark side", "most people", "exhausting",
        "performing professionalism", "hurts your credibility",
        "waste of time", "quit my .* strategy",
    ]
    if any(re.search(s, t) for s in opinion_signals):
        return "opinion"

    # Entertaining
    entertaining_signals = [
        "pov:", "rating my", "reacting to my first",
        "brutally honest", "watching netflix", "your mom and your alt",
    ]
    if any(s in t for s in entertaining_signals):
        return "entertaining"

    # Authority building
    authority_signals = [
        "after working with", "after consulting", "i've reviewed",
        "in 10 years of", "having trained", "i've built 3",
        "after helping", "i've seen hundreds", "after 8 years",
        "5 years in", "the best leaders",
    ]
    if any(s in t for s in authority_signals):
        return "authority_building"

    # Promotional
    promo_signals = [
        "just launched", "is live!", "link in bio", "register via",
        "limited spots", "% off", "sign up", "free masterclass",
    ]
    if any(s in t for s in promo_signals):
        return "promotional"

    # Motivational
    motivational_signals = [
        "you don't need permission", "decided to show up",
        "don't be most people", "nobody is coming to save",
        "keep creating", "future self", "you are not behind",
        "best investment i ever made", "make them proud",
        "persistence is ugly", "the whole secret",
        "imperfect content consistently",
    ]
    if any(s in t for s in motivational_signals):
        return "motivational"

    # Listicle
    if re.search(r'^\d+\s+(books|mistakes|ways|things|tips|tools|lessons|rules|niches|youtube)', t):
        return "listicle"

    # Educational — default for how-to / step-by-step
    educational_signals = [
        "how to", "step 1", "here's how", "the secret to",
        "explained", "101", "basics", "tip:", "for beginners",
        "strategy:", "framework:", "formula", "complete.*guide",
        "tutorial", "my.*process", "my.*workflow",
    ]
    if any(re.search(s, t) for s in educational_signals):
        return "educational"

    return "educational"


def _classify_hook(hook: str) -> str:
    h = hook.lower()

    if hook.rstrip().endswith("?"):
        return "question"

    if any(p in h for p in [
        "unpopular opinion", "hot take", "stop ", "controversial",
        "most ", "is overrated", "is garbage", "is killing", "is dead",
    ]):
        return "bold_claim"

    if any(p in h for p in [
        "i failed", "i got fired", "i was ", "i almost", "my co-founder",
        "last year i", "i turned down", "i was rejected", "my manager told",
    ]):
        return "confession"

    if re.match(r'^(\d+)\s+(books|mistakes|ways|things|tips|tools|lessons|niches|youtube)', h):
        return "list_number"

    if any(p in h for p in ["here's what", "nobody tells", "the truth"]):
        return "curiosity_gap"

    if any(p in h for p in ["how to", "here's how", "the secret to"]):
        return "how_to"

    if any(p in h for p in ["warning", "don't make", "killing your", "mistakes"]):
        return "warning"

    if any(p in h for p in [
        "went from 0", "first $", "surpassed", "hit our best",
        "after working with", "after helping",
    ]):
        return "result_proof"

    return "statement"


def _classify_length(text: str) -> str:
    wc = len(text.split())
    if wc < 40:
        return "short"
    elif wc < 100:
        return "medium"
    else:
        return "long"
