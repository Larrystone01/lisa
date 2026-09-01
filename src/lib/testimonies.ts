export type Testimony = {
  slug: string;
  name: string;
  since: string;
  category: string;
  image: string;
  quote: string;
  story: string;
  fullStory: string[];
};

export const testimonyFilters = [
  "All",
  "Healing",
  "Family",
  "Purpose",
  "Faith",
];

export const testimonies: Testimony[] = [
  {
    slug: "emmanuel-adebayo",
    name: "Emmanuel Adebayo",
    since: "Member since 2021",
    category: "Faith",
    image: "/images/imgborder.png",
    quote:
      "I came looking for answers, but what I found was a family that was not afraid of my questions.",
    story:
      "LISA helped Emmanuel rediscover a steady faith after years of distance, doubt, and quiet searching.",
    fullStory: [
      "For a long time, Emmanuel carried questions he did not know how to ask out loud. Church had become familiar, but distant. He wanted faith to feel honest again.",
      "At LISA, he found room for both reverence and questions. Worship became a place of stillness, and community became a place where he could process without pretending.",
      "Today, Emmanuel describes his journey as a slow return to trust: trust in God, trust in people, and trust that his story is still being written with grace.",
    ],
  },
  {
    slug: "tosin-adewale",
    name: "Tosin Adewale",
    since: "Member since 2023",
    category: "Healing",
    image: "/images/mobilesideimg.png",
    quote:
      "I walked in tired and guarded. Week by week, God gave me language for hope again.",
    story:
      "Through prayer, worship, and pastoral care, Tosin found courage to heal and reconnect with community.",
    fullStory: [
      "Tosin first came to LISA during a season of emotional exhaustion. She was present in the room, but internally she felt far away from everyone around her.",
      "Prayer nights gave her a place to be honest before God. Pastoral care helped her name what had been heavy, and community reminded her she did not have to heal alone.",
      "Her testimony is not about everything becoming easy. It is about receiving enough hope to keep walking, and discovering that God was gentle in the process.",
    ],
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    since: "Member since 2020",
    category: "Family",
    image: "/images/brunch.png",
    quote:
      "Community became the mirror I needed to see myself clearly again.",
    story:
      "Sarah found a spiritual family where shared meals, service, and honest conversations became part of her growth.",
    fullStory: [
      "Sarah was not looking for a program. She was looking for people who could become steady, prayerful, and kind companions in her walk with God.",
      "Over time, gatherings, meals, and serving teams gave her a deeper sense of belonging. She found people who celebrated growth and stayed close through hard seasons.",
      "LISA became a family for Sarah: not perfect, but present, committed, and full of reminders that faith is meant to be lived together.",
    ],
  },
  {
    slug: "julian-marks",
    name: "Julian Marks",
    since: "Member since 2022",
    category: "Purpose",
    image: "/images/gatheringImg.png",
    quote:
      "I thought purpose had to be dramatic. LISA taught me that faithfulness can begin quietly.",
    story:
      "Julian discovered a clearer sense of calling through serving, discipleship, and weekly teaching.",
    fullStory: [
      "Julian came into community with a restless desire to do something meaningful, but he often overlooked the ordinary places where purpose begins.",
      "Through discipleship and serving, he learned that calling is formed through consistency, humility, and attention to the needs right in front of us.",
      "His testimony is a reminder that purpose is not always loud. Sometimes it begins with showing up, serving faithfully, and allowing God to shape the heart over time.",
    ],
  },
  {
    slug: "miriam-cole",
    name: "Miriam Cole",
    since: "Member since 2024",
    category: "Healing",
    image: "/images/lisa-circle.png",
    quote:
      "The first prayer night I attended felt like breathing after holding my breath for years.",
    story:
      "Miriam's testimony is one of restoration, patient support, and learning to trust God with her story.",
    fullStory: [
      "Miriam arrived at LISA in a season where she felt spiritually tired. She still believed, but she needed a place where her faith could breathe again.",
      "The prayer room became sacred for her. Not because everything changed overnight, but because she began to sense God's nearness in a way she had missed.",
      "Her journey continues with patience and tenderness. She now shares her story as evidence that restoration can begin quietly and still be deeply real.",
    ],
  },
  {
    slug: "david-okoro",
    name: "David Okoro",
    since: "Member since 2019",
    category: "Purpose",
    image: "/images/worshipnight.png",
    quote:
      "Serving here gave me a way to turn gratitude into something useful for others.",
    story:
      "David found renewed purpose by joining outreach teams and mentoring younger members of the church.",
    fullStory: [
      "David had been part of church life for years, but serving at LISA helped him see ministry as something close, practical, and personal.",
      "Outreach gave him a place to express gratitude through action. Mentoring younger members helped him understand how much his own journey could encourage someone else.",
      "For David, purpose became less about a title and more about availability: being willing to love, listen, and serve wherever God placed him.",
    ],
  },
];

export const getTestimonyBySlug = (slug: string | undefined) =>
  testimonies.find((testimony) => testimony.slug === slug);
