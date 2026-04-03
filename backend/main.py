"""
Postera Backend v2 — Multi-platform AI Content Strategist API.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from engine.mock_data import PLATFORM_DATA
from engine.classifier import classify_post
from engine.scorer import score_posts, get_confidence
from engine.pattern_miner import mine_patterns, find_key_patterns
from engine.diagnosis import diagnose

app = FastAPI(title="Postera API", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyzeRequest(BaseModel):
    username: str = "demo_user"
    platform: str = "twitter"


@app.post("/api/analyze")
async def analyze(request: AnalyzeRequest):
    platform = request.platform.lower()
    if platform not in PLATFORM_DATA:
        platform = "twitter"

    posts = [dict(p) for p in PLATFORM_DATA[platform]]

    for post in posts:
        post["classification"] = classify_post(post, platform)

    posts = score_posts(posts, platform)

    confidence = get_confidence(len(posts))
    pattern_data = mine_patterns(posts, platform)
    key_patterns = find_key_patterns(pattern_data)
    diagnosis_result = diagnose(pattern_data, key_patterns, platform, confidence["level"])

    summary = {
        "username": request.username,
        "platform": platform,
        "total_posts": len(posts),
        "avg_engagement": pattern_data["overall_avg_engagement"],
        "top_performers": pattern_data["top_performer_count"],
    }

    return {
        "summary": summary,
        "confidence": confidence,
        "insights": diagnosis_result["insights"],
        "mistakes": diagnosis_result["mistakes"],
        "actions": diagnosis_result["actions"],
        "content_mix": pattern_data.get("content_mix", []),
        "strongest_themes": pattern_data.get("strongest_themes", []),
        "strategy_summary": diagnosis_result.get("strategy_summary", ""),
    }


@app.get("/health")
async def health():
    return {"status": "ok", "version": "2.0.0"}
