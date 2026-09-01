import {
  CalendarDays,
  Clock3,
  Download,
  Headphones,
  Play,
  Search,
  Share2,
} from "lucide-react";
import {
  DesignButton,
  Eyebrow,
  PageShell,
} from "../components/lisa-page-sections";

const sermonCategories = ["All", "Faith", "Prayer", "Community", "Purpose"];

const sermons = [
  {
    title: "Atmosphere of the Spirit",
    speaker: "Pastor, Dr. Sam Enesi",
    date: "August 25, 2026",
    duration: "42 min",
    category: "Faith",
    image: "/images/home-bg.png",
    text: "A message on cultivating a life where worship, attention, and surrender become the climate of the heart.",
  },
  {
    title: "The Table That Makes Room",
    speaker: "Pastor T.",
    date: "August 18, 2026",
    duration: "38 min",
    category: "Community",
    image: "/images/brunch.png",
    text: "How Jesus forms a people through hospitality, shared stories, and the courage to make space for one another.",
  },
  {
    title: "When Prayer Gets Honest",
    speaker: "Elena Rivers",
    date: "August 11, 2026",
    duration: "46 min",
    category: "Prayer",
    image: "/images/worshipnight.png",
    text: "A grounded invitation to bring real questions, grief, gratitude, and expectation into the presence of God.",
  },
  {
    title: "Built for More Than Survival",
    speaker: "Julian Marks",
    date: "August 4, 2026",
    duration: "35 min",
    category: "Purpose",
    image: "/images/gatheringImg.png",
    text: "A teaching on vocation, spiritual resilience, and the holy imagination needed for ordinary faithfulness.",
  },
  {
    title: "Stillness in a Noisy World",
    speaker: "Sarah Jenkins",
    date: "July 28, 2026",
    duration: "41 min",
    category: "Faith",
    image: "/images/mobilesideimg.png",
    text: "Learning to hear God clearly when the pace of life keeps pulling the soul toward hurry.",
  },
  {
    title: "Mercy Moves First",
    speaker: "Pastor, Dr. Sam Enesi",
    date: "July 21, 2026",
    duration: "44 min",
    category: "Community",
    image: "/images/imgborder.png",
    text: "A sermon about compassion that leaves the sanctuary and becomes a tangible practice in the city.",
  },
];

const latestSermon = sermons[0];

export default function SermonsPage() {
  return (
    <main className="bg-black text-white">
      <PageShell className="py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Eyebrow tone="dark">Sermon Archive</Eyebrow>
            <h1 className="mt-8 max-w-2xl font-primary text-5xl font-semibold leading-[1.02] sm:text-7xl">
              Messages for the journey.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
              Watch, listen, and revisit every sermon posted by LISA. Each
              message is gathered here for reflection throughout the week.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <DesignButton tone="dark">
                <Play size={15} fill="currentColor" /> Watch Latest
              </DesignButton>
              <DesignButton tone="dark" variant="outline">
                Browse Archive
              </DesignButton>
            </div>
          </div>

          <article className="bg-neutral text-primary">
            <div className="relative">
              <img
                className="h-80 w-full object-cover sm:h-110"
                src={latestSermon.image}
                alt=""
              />
              <button
                aria-label="Play latest sermon"
                className="absolute bottom-6 left-6 inline-flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-tertiary hover:text-white hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0"
              >
                <Play size={22} fill="currentColor" />
              </button>
            </div>
            <div className="p-8 sm:p-10">
              <Eyebrow>Latest Message</Eyebrow>
              <h2 className="mt-6 font-primary text-4xl font-semibold leading-tight">
                {latestSermon.title}
              </h2>
              <p className="mt-5 leading-7 text-primary/65">
                {latestSermon.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary/55">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={14} /> {latestSermon.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={14} /> {latestSermon.duration}
                </span>
              </div>
            </div>
          </article>
        </div>
      </PageShell>

      <PageShell className="border-y border-white/15 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {sermonCategories.map((category) => (
              <button
                className={`min-h-10 border px-5 text-[11px] font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 ${
                  category === "All"
                    ? "border-white bg-white text-primary hover:bg-secondary"
                    : "border-white/25 text-white/55 hover:border-white hover:bg-white hover:text-primary"
                }`}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="flex max-w-sm items-center gap-3 border-b border-white/35 pb-3 text-white/45">
            <Search size={18} />
            <input
              className="min-h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-white/45"
              placeholder="Search sermons..."
            />
          </label>
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-24 text-primary">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sermons.map((sermon) => (
            <article className="bg-white" key={sermon.title}>
              <div className="relative">
                <img
                  className="h-64 w-full object-cover grayscale"
                  src={sermon.image}
                  alt=""
                />
                <span className="absolute left-5 top-5 bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]">
                  {sermon.category}
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary/45">
                  {sermon.date} / {sermon.duration}
                </p>
                <h2 className="mt-5 font-primary text-3xl font-semibold leading-tight">
                  {sermon.title}
                </h2>
                <p className="mt-3 text-sm font-bold text-primary/70">
                  {sermon.speaker}
                </p>
                <p className="mt-5 leading-7 text-primary/65">
                  {sermon.text}
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <button
                    aria-label={`Play ${sermon.title}`}
                    className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-white transition duration-300 hover:-translate-y-0.5 hover:bg-tertiary hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
                  >
                    <Play size={15} fill="currentColor" />
                  </button>
                  <button
                    aria-label={`Listen to ${sermon.title}`}
                    className="inline-flex size-11 items-center justify-center border border-black/15 transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
                  >
                    <Headphones size={16} />
                  </button>
                  <button
                    aria-label={`Download ${sermon.title}`}
                    className="inline-flex size-11 items-center justify-center border border-black/15 transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    aria-label={`Share ${sermon.title}`}
                    className="inline-flex size-11 items-center justify-center border border-black/15 transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary active:translate-y-0"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell className="bg-white py-24 text-primary">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Eyebrow>Never Miss a Message</Eyebrow>
            <h2 className="mt-7 max-w-xl font-primary text-4xl font-semibold leading-tight sm:text-5xl">
              New sermons are posted weekly after Sunday gathering.
            </h2>
          </div>
          <form className="flex flex-col gap-5 sm:flex-row lg:justify-end">
            <input
              className="min-h-12 flex-1 border-b border-black/25 bg-transparent outline-none placeholder:text-primary/45 lg:max-w-xs"
              placeholder="Email address"
            />
            <DesignButton>Subscribe</DesignButton>
          </form>
        </div>
      </PageShell>
    </main>
  );
}
