"""
mock_data.py — Multi-platform mock content datasets.

4 platform datasets, each with deliberately skewed distributions:
- Twitter/X: 35 posts — educational overrepresented/underperforms, story rare/crushes
- Instagram: 28 posts — lifestyle heavy but storytelling wins
- LinkedIn: 30 posts — authority-building heavy, personal story underused
- YouTube: 25 videos — tutorial heavy, contrarian opinion videos outperform
"""


TWITTER_POSTS = [
    # STORY (4) — rare, top performers
    {"id":"tw1","text":"I failed my first startup in 6 months. Lost $40k. Here's what nobody tells you about the founder journey — the loneliness hits harder than the money.","likes":1820,"comments":342,"shares":580,"timestamp":"2026-03-28T09:00:00Z"},
    {"id":"tw2","text":"Last year I was mass-applying to jobs getting zero callbacks. Today I run a 6-figure agency. The turning point? I stopped optimizing my resume and started building in public.","likes":2100,"comments":410,"shares":720,"timestamp":"2026-03-20T14:30:00Z"},
    {"id":"tw3","text":"My co-founder quit on day 90. I almost followed. But one phone call changed everything. Sometimes the difference between failure and success is a single conversation.","likes":1540,"comments":280,"shares":490,"timestamp":"2026-03-10T11:00:00Z"},
    {"id":"tw4","text":"I got fired from my dream job at 26. Best thing that ever happened. Here's the messy, honest story of how losing everything forced me to build something real.","likes":1950,"comments":365,"shares":610,"timestamp":"2026-02-25T08:15:00Z"},
    # EDUCATIONAL (13) — overrepresented, underperforms
    {"id":"tw5","text":"How to build a personal brand in 2026: Step 1: Pick a niche. Step 2: Post consistently. Step 3: Engage with others. Step 4: Provide value.","likes":180,"comments":22,"shares":15,"timestamp":"2026-03-27T10:00:00Z"},
    {"id":"tw6","text":"The difference between a good hook and a bad hook: Good hooks create tension. Bad hooks describe what's coming.","likes":240,"comments":30,"shares":28,"timestamp":"2026-03-26T09:30:00Z"},
    {"id":"tw7","text":"Content strategy 101: You need 3 content pillars. Each pillar should solve a specific problem for your audience.","likes":150,"comments":18,"shares":12,"timestamp":"2026-03-25T11:00:00Z"},
    {"id":"tw8","text":"How to get more engagement: 1. Ask questions 2. Share unpopular opinions 3. Tell stories 4. Use data 5. Be vulnerable","likes":310,"comments":45,"shares":35,"timestamp":"2026-03-24T08:00:00Z"},
    {"id":"tw9","text":"The algorithm explained: It favors dwell time over likes. Write posts that make people stop scrolling. Long-form = more reach.","likes":195,"comments":25,"shares":18,"timestamp":"2026-03-23T12:00:00Z"},
    {"id":"tw10","text":"How to write threads that go viral: Start with a bold hook. Each tweet should stand alone. End with a CTA.","likes":170,"comments":20,"shares":14,"timestamp":"2026-03-22T10:30:00Z"},
    {"id":"tw11","text":"5 tools every content creator needs: 1. Notion 2. Canva 3. Buffer 4. Grammarly 5. Shield","likes":280,"comments":32,"shares":40,"timestamp":"2026-03-21T09:00:00Z"},
    {"id":"tw12","text":"The secret to growing on Twitter: Post 3x per day. Engage for 30 minutes before and after. Reply to big accounts.","likes":145,"comments":15,"shares":10,"timestamp":"2026-03-19T14:00:00Z"},
    {"id":"tw13","text":"How to repurpose one piece of content into 10: Blog → thread → carousel → video → newsletter → podcast → quote → poll → story → reel.","likes":220,"comments":28,"shares":22,"timestamp":"2026-03-17T11:30:00Z"},
    {"id":"tw14","text":"SEO basics for creators: Use keywords in headlines. Write meta descriptions. Internal link posts. Update old content.","likes":125,"comments":12,"shares":8,"timestamp":"2026-03-15T08:45:00Z"},
    {"id":"tw15","text":"How to nail your content calendar: Plan 2 weeks ahead. Mix formats. Track what performs. Cut what doesn't.","likes":160,"comments":19,"shares":11,"timestamp":"2026-03-12T10:00:00Z"},
    {"id":"tw16","text":"Email marketing for beginners: Build a list from day one. Send value not pitches. Segment your audience.","likes":135,"comments":14,"shares":9,"timestamp":"2026-03-08T09:00:00Z"},
    {"id":"tw17","text":"Copywriting tip: Write at 6th grade level. Short sentences. Simple words. One idea per paragraph.","likes":200,"comments":24,"shares":16,"timestamp":"2026-03-05T13:00:00Z"},
    # OPINION (6) — moderate use, high performance
    {"id":"tw18","text":"Unpopular opinion: Most 'how-to' content is garbage. Everyone is teaching the same 5 steps they read from someone else. Original thinking is the real moat.","likes":1200,"comments":185,"shares":340,"timestamp":"2026-03-26T15:00:00Z"},
    {"id":"tw19","text":"Hot take: Consistency is overrated. Posting daily mediocre content is worse than posting twice a week with fire.","likes":980,"comments":150,"shares":265,"timestamp":"2026-03-22T16:30:00Z"},
    {"id":"tw20","text":"The 'provide value' advice is killing your growth. You know what actually grows accounts? Having a perspective. Being memorable.","likes":1450,"comments":220,"shares":410,"timestamp":"2026-03-18T14:00:00Z"},
    {"id":"tw21","text":"Everyone talks about 'building in public.' Nobody talks about the anxiety of sharing your revenue when it drops 40%.","likes":890,"comments":130,"shares":195,"timestamp":"2026-03-14T11:00:00Z"},
    {"id":"tw22","text":"Stop optimizing for followers. Start optimizing for replies. A small engaged audience beats 100k ghost followers.","likes":760,"comments":115,"shares":180,"timestamp":"2026-03-09T09:30:00Z"},
    {"id":"tw23","text":"AI content tools are making everyone sound the same. If you can't write without them, you don't have a voice. You have a subscription.","likes":1680,"comments":290,"shares":520,"timestamp":"2026-03-03T10:00:00Z"},
    # MOTIVATIONAL (4) — average
    {"id":"tw24","text":"You don't need permission to start. You don't need a perfect plan. You just need to begin.","likes":450,"comments":55,"shares":62,"timestamp":"2026-03-25T07:00:00Z"},
    {"id":"tw25","text":"6 months ago I had zero audience. Today 12k followers and a business. The only difference? I showed up every day.","likes":520,"comments":65,"shares":78,"timestamp":"2026-03-16T08:00:00Z"},
    {"id":"tw26","text":"Your first 100 posts will be bad. Next 100 okay. The 100 after that great. Most people quit at bad.","likes":610,"comments":72,"shares":85,"timestamp":"2026-03-11T09:00:00Z"},
    {"id":"tw27","text":"Nobody is coming to save your content strategy. No algorithm hack. No viral trick. Just you, doing the work.","likes":380,"comments":48,"shares":55,"timestamp":"2026-03-06T07:30:00Z"},
    # LISTICLE (3) — below average
    {"id":"tw28","text":"10 books that changed how I think about content: 1. Show Your Work 2. Building a StoryBrand 3. Made to Stick 4. Contagious 5. The 22 Laws of Marketing 6. Influence 7. Purple Cow 8. Write Useful Books 9. Hooked 10. Perennial Seller","likes":320,"comments":38,"shares":45,"timestamp":"2026-03-23T13:00:00Z"},
    {"id":"tw29","text":"7 mistakes I see creators make: 1. No niche 2. Inconsistent posting 3. No engagement 4. Copying others 5. Ignoring analytics 6. Never selling 7. Giving up too soon","likes":280,"comments":30,"shares":32,"timestamp":"2026-03-13T10:00:00Z"},
    {"id":"tw30","text":"5 ways to find content ideas: 1. Read your DMs 2. Check questions 3. Remix popular posts 4. Share a failure 5. Disagree with advice","likes":245,"comments":26,"shares":28,"timestamp":"2026-03-07T11:00:00Z"},
    # ENTERTAINING (2)
    {"id":"tw31","text":"POV: You just realized your 'viral' thread got 3 likes and 2 of them were your mom and your alt account.","likes":890,"comments":120,"shares":210,"timestamp":"2026-03-24T16:00:00Z"},
    {"id":"tw32","text":"Content creators explaining why they haven't posted in 2 weeks: 'I was doing deep strategic thinking.' Bro you were watching Netflix.","likes":1100,"comments":165,"shares":280,"timestamp":"2026-03-15T18:00:00Z"},
    # AUTHORITY_BUILDING (1)
    {"id":"tw33","text":"After helping 200+ creators grow their accounts, here's the #1 pattern I see in those who break 10k followers: they post what scares them, not what's safe.","likes":780,"comments":95,"shares":165,"timestamp":"2026-03-20T09:00:00Z"},
    # PROMOTIONAL (1)
    {"id":"tw34","text":"I just launched my Content Strategy course. 5 modules. Real frameworks. No fluff. Link in bio. First 50 get 40% off.","likes":95,"comments":12,"shares":5,"timestamp":"2026-03-02T10:00:00Z"},
    # CONTRARIAN (1)
    {"id":"tw35","text":"Controversial: Your audience doesn't want your content to be 'valuable.' They want it to be interesting. Value is a byproduct of attention.","likes":1320,"comments":195,"shares":380,"timestamp":"2026-03-01T12:00:00Z"},
]


INSTAGRAM_POSTS = [
    # PERSONAL_STORY (4) — rare, top performers
    {"id":"ig1","text":"This photo was taken 2 hours before I almost quit everything. Behind every curated feed is a real human having a real breakdown. Here's what happened next...","likes":3200,"comments":280,"shares":150,"timestamp":"2026-03-26T10:00:00Z"},
    {"id":"ig2","text":"One year ago I couldn't afford rent. Today I'm writing this from my own apartment that I pay for with my creative work. The journey was anything but aesthetic.","likes":4100,"comments":350,"shares":220,"timestamp":"2026-03-18T09:00:00Z"},
    {"id":"ig3","text":"I posted my first reel 6 months ago and got 47 views. I wanted to delete it. Glad I didn't. That same style of content now gets 50k+. Persistence is ugly but it works.","likes":2800,"comments":210,"shares":180,"timestamp":"2026-03-08T11:00:00Z"},
    {"id":"ig4","text":"The DM that changed my life: 'Your content helped me quit my toxic job.' When I read that, I knew creating wasn't about me anymore.","likes":3600,"comments":320,"shares":200,"timestamp":"2026-02-28T08:00:00Z"},
    # EDUCATIONAL (10) — overrepresented, moderate performance
    {"id":"ig5","text":"5 Reels tips that actually work 🎬 1. Hook in first 0.5 seconds 2. Text on screen 3. Trending audio 4. Keep it under 15 seconds 5. Strong CTA at the end","likes":800,"comments":65,"shares":40,"timestamp":"2026-03-27T12:00:00Z"},
    {"id":"ig6","text":"How I edit my photos in 3 steps: 1. Lightroom preset 2. Adjust shadows manually 3. Add grain for texture. Save this for later! 📸","likes":650,"comments":45,"shares":30,"timestamp":"2026-03-25T14:00:00Z"},
    {"id":"ig7","text":"Caption formula that works every time: Hook → Story → Lesson → CTA. Try it on your next post 💡","likes":720,"comments":52,"shares":35,"timestamp":"2026-03-23T10:00:00Z"},
    {"id":"ig8","text":"Instagram's algorithm in 2026: Shares > Saves > Comments > Likes. Design your content for shareability, not just likes.","likes":900,"comments":70,"shares":55,"timestamp":"2026-03-21T09:00:00Z"},
    {"id":"ig9","text":"How to grow on Instagram without Reels: 1. Carousel posts with value 2. Engaging captions 3. Story polls daily 4. Collab posts 5. Consistent aesthetic","likes":580,"comments":38,"shares":22,"timestamp":"2026-03-19T11:00:00Z"},
    {"id":"ig10","text":"The best time to post on Instagram in 2026: Tuesday and Thursday, 9-11 AM your audience's timezone. But consistency matters more than timing.","likes":450,"comments":30,"shares":18,"timestamp":"2026-03-17T08:00:00Z"},
    {"id":"ig11","text":"Hashtag strategy update: Use 5-8 highly relevant hashtags. Mix popular + niche. Put them in the caption, not comments.","likes":380,"comments":25,"shares":15,"timestamp":"2026-03-14T13:00:00Z"},
    {"id":"ig12","text":"How to write carousels that get saved: Slide 1 = Bold hook. Slides 2-8 = One idea per slide. Last slide = CTA. Keep text large and scannable.","likes":620,"comments":48,"shares":32,"timestamp":"2026-03-11T10:00:00Z"},
    {"id":"ig13","text":"Engagement pod vs real growth: Pods give you fake signals. Real growth comes from content that resonates with strangers, not friends who promised to like.","likes":540,"comments":42,"shares":28,"timestamp":"2026-03-06T09:00:00Z"},
    {"id":"ig14","text":"How to repurpose your best tweet into an Instagram carousel: 1. Break into slides 2. Add visuals 3. Expand each point 4. New hook for IG audience","likes":470,"comments":35,"shares":20,"timestamp":"2026-03-03T12:00:00Z"},
    # LIFESTYLE (5) — moderate, underperforms
    {"id":"ig15","text":"Morning routine check ☕ Journaling → gym → cold shower → content creation. What's your non-negotiable morning habit?","likes":340,"comments":85,"shares":10,"timestamp":"2026-03-24T07:00:00Z"},
    {"id":"ig16","text":"Coffee shop creating hits different. Found this gem in Bali and haven't left for 3 days. Creator life 🌴","likes":420,"comments":55,"shares":12,"timestamp":"2026-03-20T15:00:00Z"},
    {"id":"ig17","text":"Desk setup tour for creators who actually get things done. Minimal. Focused. No RGB lights. Just the essentials.","likes":380,"comments":45,"shares":8,"timestamp":"2026-03-16T10:00:00Z"},
    {"id":"ig18","text":"Sunday reset: Clean workspace, plan the content week, batch create 3 posts. Ready for Monday 💪","likes":290,"comments":32,"shares":6,"timestamp":"2026-03-12T18:00:00Z"},
    {"id":"ig19","text":"Workout and content creation have the same principle: consistency beats intensity. Show up even on the days you don't feel like it.","likes":310,"comments":40,"shares":14,"timestamp":"2026-03-05T08:00:00Z"},
    # OPINION (4) — high performance
    {"id":"ig20","text":"Aesthetic feeds are dead. Raw, honest, messy content wins now. Stop spending 3 hours color-grading and start spending 3 minutes being real.","likes":2400,"comments":180,"shares":120,"timestamp":"2026-03-22T16:00:00Z"},
    {"id":"ig21","text":"Hot take: Posting motivational quotes is the laziest form of content. Your audience wants YOUR thoughts, not a sentence you found on Pinterest.","likes":1800,"comments":150,"shares":95,"timestamp":"2026-03-15T14:00:00Z"},
    {"id":"ig22","text":"You don't need 10k followers to make money on Instagram. I made my first $1k at 800 followers. Here's how audience quality beats quantity every time.","likes":2100,"comments":190,"shares":130,"timestamp":"2026-03-09T11:00:00Z"},
    {"id":"ig23","text":"The creator economy isn't saturated. Your niche isn't too crowded. Your content just isn't different enough yet. Be the version only you can be.","likes":1600,"comments":140,"shares":85,"timestamp":"2026-03-02T09:00:00Z"},
    # MOTIVATIONAL (3)
    {"id":"ig24","text":"You're one piece of content away from changing someone's life. Keep creating even when the numbers don't show it yet.","likes":560,"comments":60,"shares":25,"timestamp":"2026-03-13T08:00:00Z"},
    {"id":"ig25","text":"Reminder: The creator who posts imperfect content consistently will always beat the one waiting for everything to be perfect.","likes":480,"comments":50,"shares":20,"timestamp":"2026-03-07T09:00:00Z"},
    {"id":"ig26","text":"6 months from now you'll wish you started today. Your future self is watching. Make them proud.","likes":620,"comments":65,"shares":30,"timestamp":"2026-03-01T07:00:00Z"},
    # PROMOTIONAL (2) — underperforms
    {"id":"ig27","text":"🚀 My Instagram Growth Blueprint is LIVE! Learn the exact strategy I used to go from 0 to 25k. Link in bio. Limited spots.","likes":180,"comments":15,"shares":5,"timestamp":"2026-03-10T12:00:00Z"},
    {"id":"ig28","text":"Free masterclass this Friday: 'How to Create Content That Sells Without Being Salesy.' Register via the link in my bio!","likes":150,"comments":12,"shares":4,"timestamp":"2026-03-04T10:00:00Z"},
]


LINKEDIN_POSTS = [
    # PERSONAL_STORY (4) — rare, CRUSHES
    {"id":"li1","text":"I was rejected 47 times before landing my first client.\n\nNot 5. Not 10. Forty-seven.\n\nEach rejection felt like proof that I wasn't good enough. But rejection #48 said yes. And that one yes built a $500k business.\n\nThe lesson? You only need one yes. But you have to survive the nos.","likes":4200,"comments":380,"shares":650,"timestamp":"2026-03-27T08:00:00Z"},
    {"id":"li2","text":"My manager told me I'd never be a leader.\n\nI believed him for 3 years.\n\nToday I lead a team of 15 and we just hit our best quarter. The person who told you what you can't be doesn't define what you will become.","likes":3800,"comments":320,"shares":580,"timestamp":"2026-03-19T09:00:00Z"},
    {"id":"li3","text":"I turned down a $200k salary to start my own thing.\n\nMonth 1: Made $0.\nMonth 3: Made $2,400.\nMonth 6: Made $18,000.\nMonth 12: Surpassed the salary I left.\n\nThe scariest decision I ever made became the most defining.","likes":5100,"comments":450,"shares":780,"timestamp":"2026-03-11T07:30:00Z"},
    {"id":"li4","text":"My first LinkedIn post got 3 likes. All from family.\n\nMy most recent post reached 400,000 people.\n\nNothing changed except I kept going when everyone said LinkedIn was a waste of time.","likes":3500,"comments":290,"shares":520,"timestamp":"2026-03-03T08:00:00Z"},
    # AUTHORITY_BUILDING (10) — overrepresented, moderate
    {"id":"li5","text":"After working with 150+ B2B companies, here's what I've learned about content marketing:\n\nThe companies that win aren't the ones with the biggest budgets. They're the ones with the clearest point of view.","likes":850,"comments":65,"shares":90,"timestamp":"2026-03-26T09:00:00Z"},
    {"id":"li6","text":"I've reviewed 500+ LinkedIn profiles this year. The #1 mistake? Your headline says your job title, not your value proposition. Nobody hires a 'Marketing Manager.' They hire someone who 'helps B2B SaaS companies 3x their pipeline.'","likes":1100,"comments":85,"shares":120,"timestamp":"2026-03-24T08:30:00Z"},
    {"id":"li7","text":"In 10 years of hiring, the candidates who stand out always do one thing differently: they show evidence of thinking, not just experience. Your portfolio matters more than your resume.","likes":780,"comments":55,"shares":75,"timestamp":"2026-03-22T09:00:00Z"},
    {"id":"li8","text":"I've built 3 personal brands from zero. The framework is always the same: 1) Pick a specific audience 2) Solve their #1 pain 3) Show up with perspective, not just information.","likes":920,"comments":70,"shares":95,"timestamp":"2026-03-20T08:00:00Z"},
    {"id":"li9","text":"After consulting for 40+ startups, I can tell you the ones that fail at content all make the same mistake: they talk about their product instead of their customer's problem.","likes":680,"comments":50,"shares":65,"timestamp":"2026-03-18T09:30:00Z"},
    {"id":"li10","text":"The best leaders I've worked with share one trait: they ask more questions than they give answers. Leadership isn't about knowing everything. It's about knowing what to ask.","likes":750,"comments":60,"shares":80,"timestamp":"2026-03-16T08:00:00Z"},
    {"id":"li11","text":"Having trained 200+ salespeople, I'll tell you: the top performers never 'sell.' They diagnose problems and prescribe solutions. Stop pitching. Start consulting.","likes":640,"comments":45,"shares":55,"timestamp":"2026-03-14T09:00:00Z"},
    {"id":"li12","text":"5 years in executive coaching taught me this: most leadership problems are communication problems in disguise. Fix how you communicate and you fix 80% of your team issues.","likes":580,"comments":40,"shares":50,"timestamp":"2026-03-12T08:30:00Z"},
    {"id":"li13","text":"I've seen hundreds of LinkedIn profiles. The ones that convert have 3 things: a clear headline, a story-driven About section, and featured content that proves their expertise.","likes":720,"comments":55,"shares":70,"timestamp":"2026-03-08T09:00:00Z"},
    {"id":"li14","text":"After 8 years in content strategy, here's my honest take: 90% of content strategies fail because they're built around what the brand wants to say, not what the audience needs to hear.","likes":890,"comments":72,"shares":95,"timestamp":"2026-03-05T08:00:00Z"},
    # EDUCATIONAL (8) — moderate use, lower performance
    {"id":"li15","text":"How to write a LinkedIn post that performs:\n\n1. Start with a hook\n2. One idea per line\n3. Use white space\n4. End with a question\n5. Engage in comments for 30 min after posting\n\nSimple framework, massive results.","likes":420,"comments":35,"shares":30,"timestamp":"2026-03-25T10:00:00Z"},
    {"id":"li16","text":"The LinkedIn algorithm in 2026 works like this:\n\n- First 90 minutes matter most\n- Comments > Reactions\n- Dwell time signals quality\n- External links get suppressed\n- Native content wins","likes":380,"comments":28,"shares":25,"timestamp":"2026-03-23T09:30:00Z"},
    {"id":"li17","text":"How to network on LinkedIn without being awkward:\n\n1. Comment on their posts for 2 weeks first\n2. Reference something specific they said\n3. Offer value before asking for anything\n4. Keep your DM to 3 sentences max","likes":350,"comments":30,"shares":22,"timestamp":"2026-03-21T08:00:00Z"},
    {"id":"li18","text":"Content repurposing framework:\n\nOne long-form post → 3 carousels → 5 story clips → 1 newsletter → 2 comment responses that become standalone posts.\n\nStop creating from scratch every day.","likes":300,"comments":25,"shares":20,"timestamp":"2026-03-17T10:00:00Z"},
    {"id":"li19","text":"Your LinkedIn headline formula: [What you do] + [for whom] + [the result you deliver]. Example: 'I help B2B founders turn LinkedIn into a lead generation engine.'","likes":450,"comments":38,"shares":35,"timestamp":"2026-03-13T09:00:00Z"},
    {"id":"li20","text":"3 types of LinkedIn content that build authority:\n\n1. Framework posts (show your thinking)\n2. Counter-narrative posts (challenge common beliefs)\n3. Case study posts (prove your results)","likes":520,"comments":42,"shares":40,"timestamp":"2026-03-09T08:30:00Z"},
    {"id":"li21","text":"How to go from 0 to 5k followers on LinkedIn:\n\nWeek 1-4: Post daily, engage 30 min/day\nMonth 2: Find your voice, refine topics\nMonth 3-6: Consistent quality + strategic commenting","likes":280,"comments":20,"shares":15,"timestamp":"2026-03-06T09:00:00Z"},
    {"id":"li22","text":"Resume tips for 2026:\n\n- Lead with impact, not responsibilities\n- Quantify everything\n- One page max\n- Skills section aligned with job description\n- Custom cover letter for each application","likes":260,"comments":18,"shares":12,"timestamp":"2026-03-02T10:00:00Z"},
    # OPINION (5) — strong performers
    {"id":"li23","text":"Unpopular opinion: Most people on LinkedIn are performing professionalism, not practicing it.\n\nThe posts that say 'I'm grateful for my team' get likes. The leaders who actually invest in their team don't need to announce it.","likes":2800,"comments":220,"shares":350,"timestamp":"2026-03-25T14:00:00Z"},
    {"id":"li24","text":"Hot take: The 'CEO' title in your headline when you're a solo freelancer hurts your credibility more than it helps. Be honest about where you are. Authenticity converts better than inflation.","likes":2200,"comments":180,"shares":280,"timestamp":"2026-03-21T15:00:00Z"},
    {"id":"li25","text":"The hustle culture posts on LinkedIn are exhausting.\n\n'I wake up at 4am, work 16 hours, and never take a day off.'\n\nThat's not success. That's a burnout case study.","likes":3100,"comments":260,"shares":400,"timestamp":"2026-03-15T16:00:00Z"},
    {"id":"li26","text":"Stop calling everything a 'journey.' Your post about switching from Slack to Teams is not a journey. Save that word for transformations that actually matter.","likes":1800,"comments":150,"shares":220,"timestamp":"2026-03-10T14:00:00Z"},
    {"id":"li27","text":"Controversial: Networking events are mostly a waste of time for introverts. Building real relationships through consistent, thoughtful online engagement produces better outcomes than exchanging business cards at a happy hour.","likes":1500,"comments":120,"shares":180,"timestamp":"2026-03-04T11:00:00Z"},
    # MOTIVATIONAL (3)
    {"id":"li28","text":"You are not behind. You are not late. You are exactly where you need to be. The person you compare yourself to started before you. That's it. Start now.","likes":680,"comments":55,"shares":50,"timestamp":"2026-03-07T07:00:00Z"},
    {"id":"li29","text":"The best investment I ever made wasn't a stock or a course. It was deciding to post on LinkedIn every day for 90 days straight. It changed my career.","likes":580,"comments":45,"shares":40,"timestamp":"2026-03-01T08:00:00Z"},
    {"id":"li30","text":"Nobody believed in my career pivot from finance to content marketing. Everyone said I was crazy. 2 years later, I make more money, have more freedom, and actually enjoy Monday mornings.","likes":750,"comments":60,"shares":65,"timestamp":"2026-02-26T09:00:00Z"},
]


YOUTUBE_POSTS = [
    # TUTORIAL / EDUCATIONAL (10) — overrepresented, moderate
    {"id":"yt1","text":"How to Start a YouTube Channel in 2026 (Complete Beginner Guide)","description":"In this video I walk you through everything from setting up your channel to uploading your first video. Equipment, settings, SEO, and first 1000 subscriber strategy.","likes":450,"comments":85,"shares":30,"timestamp":"2026-03-27T14:00:00Z","views":15000},
    {"id":"yt2","text":"YouTube SEO Tutorial: Rank #1 in Search (Step by Step)","description":"Learn my exact process for ranking YouTube videos in search. Keyword research, title optimization, description strategy, and thumbnail testing.","likes":380,"comments":65,"shares":25,"timestamp":"2026-03-24T10:00:00Z","views":12000},
    {"id":"yt3","text":"How I Edit My YouTube Videos (Full Workflow)","description":"My complete editing workflow from import to export. Premiere Pro tips, color grading, sound design, and my favorite plugins.","likes":320,"comments":50,"shares":18,"timestamp":"2026-03-21T12:00:00Z","views":9500},
    {"id":"yt4","text":"How to Write YouTube Titles That Get Clicks","description":"Title formulas that work, backed by data. I analyzed my top 50 videos to find what patterns drive the most CTR.","likes":290,"comments":42,"shares":15,"timestamp":"2026-03-18T11:00:00Z","views":8800},
    {"id":"yt5","text":"YouTube Analytics Explained: The Only Metrics That Matter","description":"Stop obsessing over subscriber count. Here are the metrics that actually predict channel growth.","likes":260,"comments":38,"shares":12,"timestamp":"2026-03-15T14:00:00Z","views":7200},
    {"id":"yt6","text":"How to Script YouTube Videos (My Framework)","description":"The 3-part scripting framework I use for every video: Hook, Body, CTA. Templates included.","likes":340,"comments":55,"shares":20,"timestamp":"2026-03-12T10:00:00Z","views":10500},
    {"id":"yt7","text":"Thumbnail Design Tutorial for YouTube (Free Tools Only)","description":"Create professional thumbnails without Photoshop. Using Canva, Remove.bg, and some tricks.","likes":280,"comments":40,"shares":14,"timestamp":"2026-03-09T11:00:00Z","views":8000},
    {"id":"yt8","text":"How to Get Your First 1000 Subscribers on YouTube","description":"Realistic strategy for new creators. No hacks, no tricks. Just consistent execution and smart content choices.","likes":310,"comments":48,"shares":16,"timestamp":"2026-03-06T12:00:00Z","views":9200},
    {"id":"yt9","text":"YouTube Shorts Strategy: Should You Post Shorts in 2026?","description":"Breaking down when Shorts help your channel and when they actually hurt long-form performance.","likes":220,"comments":35,"shares":10,"timestamp":"2026-03-03T14:00:00Z","views":6500},
    {"id":"yt10","text":"How to Batch Film YouTube Videos (My 1-Day Process)","description":"I film an entire month of content in one day. Here's my exact workflow and preparation process.","likes":250,"comments":38,"shares":12,"timestamp":"2026-02-28T10:00:00Z","views":7000},
    # OPINION / CONTRARIAN (5) — rare, TOP PERFORMERS
    {"id":"yt11","text":"Why Most YouTube Advice is Wrong (The Truth Nobody Shares)","description":"I followed all the 'YouTube guru' advice for a year. Most of it was wrong. Here's what actually works based on real data from my channel.","likes":1800,"comments":280,"shares":150,"timestamp":"2026-03-26T15:00:00Z","views":62000},
    {"id":"yt12","text":"I Quit My YouTube Strategy. Here's What Happened.","description":"After 2 years of 'optimized' content, I threw out the playbook and just made what I wanted. The results shocked me.","likes":2200,"comments":340,"shares":180,"timestamp":"2026-03-20T14:00:00Z","views":78000},
    {"id":"yt13","text":"The YouTube Algorithm Doesn't Care About You (And That's Good)","description":"Stop blaming the algorithm. Start making better content. A brutally honest analysis of why most channels plateau.","likes":1500,"comments":220,"shares":120,"timestamp":"2026-03-14T12:00:00Z","views":48000},
    {"id":"yt14","text":"Stop Watching YouTube Tutorials and Start Making Videos","description":"The tutorial trap is real. You're spending more time learning about YouTube than actually making content. Here's how to break out.","likes":1200,"comments":180,"shares":95,"timestamp":"2026-03-08T13:00:00Z","views":38000},
    {"id":"yt15","text":"Why I'll Never Use AI to Write My Scripts","description":"Everyone's using AI now. Here's why I refuse, and why my audience can tell the difference. Authenticity is the last real moat.","likes":2500,"comments":380,"shares":200,"timestamp":"2026-03-02T11:00:00Z","views":85000},
    # STORY / PERSONAL (4) — moderate, strong performers
    {"id":"yt16","text":"How I Went from 0 to 100K Subscribers (Full Story)","description":"The honest, unglamorous story of building my channel. Every failure, every pivot, and the 3 decisions that actually mattered.","likes":1600,"comments":250,"shares":130,"timestamp":"2026-03-23T10:00:00Z","views":52000},
    {"id":"yt17","text":"I Almost Quit YouTube. This Video Saved My Channel.","description":"At 500 subscribers after 8 months, I was ready to delete everything. Then one video changed everything.","likes":1400,"comments":210,"shares":110,"timestamp":"2026-03-16T14:00:00Z","views":45000},
    {"id":"yt18","text":"My Biggest YouTube Mistake (3 Years of Regret)","description":"I spent 3 years doing something wrong. By the time I realized, I'd wasted hundreds of hours. Don't make this mistake.","likes":1100,"comments":170,"shares":85,"timestamp":"2026-03-10T12:00:00Z","views":35000},
    {"id":"yt19","text":"Day in the Life of a Full-Time YouTuber (Honest Version)","description":"No aesthetic B-roll montage. Just the real, sometimes boring, sometimes stressful reality of doing this full-time.","likes":950,"comments":140,"shares":70,"timestamp":"2026-03-04T10:00:00Z","views":30000},
    # ENTERTAINING (3)
    {"id":"yt20","text":"Rating My Subscribers' YouTube Channels (Brutally Honest)","description":"I asked subscribers to send their channels for review. Here's my honest feedback on what they're doing right and wrong.","likes":1300,"comments":320,"shares":90,"timestamp":"2026-03-22T16:00:00Z","views":42000},
    {"id":"yt21","text":"I Made a YouTube Video Every Day for 30 Days. Never Again.","description":"The viral daily upload challenge. Spoiler: it nearly broke me. Here's what I learned about sustainability vs hustle.","likes":1700,"comments":260,"shares":140,"timestamp":"2026-03-13T15:00:00Z","views":55000},
    {"id":"yt22","text":"Reacting to My First YouTube Video (5 Years Later)","description":"Going back to where it all started. The cringe, the growth, and the accidental lessons from my worst content ever.","likes":1100,"comments":190,"shares":75,"timestamp":"2026-03-07T14:00:00Z","views":34000},
    # LISTICLE (3)
    {"id":"yt23","text":"10 YouTube Tools I Use Every Day (2026 Edition)","description":"My actual toolkit: editing software, thumbnail tools, analytics, scripting, and workflow apps.","likes":400,"comments":60,"shares":25,"timestamp":"2026-03-19T11:00:00Z","views":11000},
    {"id":"yt24","text":"5 Mistakes Killing Your YouTube Channel (Fix These Now)","description":"Common mistakes I see constantly in channel reviews. Easy fixes that can dramatically improve your performance.","likes":350,"comments":50,"shares":20,"timestamp":"2026-03-11T10:00:00Z","views":9500},
    {"id":"yt25","text":"7 YouTube Niches That Will Explode in 2026","description":"Based on trend data and search volume analysis, these niches have massive growth potential right now.","likes":500,"comments":75,"shares":35,"timestamp":"2026-03-05T12:00:00Z","views":16000},
]


PLATFORM_DATA = {
    "twitter": TWITTER_POSTS,
    "instagram": INSTAGRAM_POSTS,
    "linkedin": LINKEDIN_POSTS,
    "youtube": YOUTUBE_POSTS,
}
