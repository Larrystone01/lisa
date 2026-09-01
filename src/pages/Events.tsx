import { ArrowRight, Search } from "lucide-react";
import {
  DesignButton,
  EventPreviewCard,
  Eyebrow,
  PageShell,
} from "../components/lisa-page-sections";

const eventPreviews = [
  {
    tag: "Community",
    image: "/images/brunch.png",
    date: "02",
    month: "Nov",
    title: "LISA Table: Sunday Brunch",
    text: "A relaxed morning of conversation and locally sourced food after the service.",
    time: "11:30 AM - Main Hall",
  },
  {
    tag: "Outreach",
    image: "/images/sideimg.png",
    date: "10",
    month: "Nov",
    title: "City Garden Project",
    text: "Investing in our neighborhood through urban renewal and sustainable care.",
    time: "09:00 AM - West End",
  },
  {
    tag: "Worship",
    image: "/images/worshipnight.png",
    date: "15",
    month: "Nov",
    title: "Vesper: Evening Harmonies",
    text: "A liturgical evening service focused on traditional hymns reimagined for today.",
    time: "08:00 PM - The Chapel",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-black text-white">
      <PageShell className="py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <Eyebrow tone="dark">Calendar</Eyebrow>
            <h1 className="mt-8 font-primary text-5xl font-semibold leading-[1.05] text-white/80 sm:text-7xl">
              What's happening <em className="font-normal">at LISA?</em>
            </h1>
          </div>
          <p className="max-w-sm self-center text-lg leading-8 text-white/40">
            A curated collection of gatherings designed to foster community,
            growth, and collective worship.
          </p>
        </div>

        <article className="mt-20 grid bg-neutral text-primary lg:grid-cols-[1.25fr_0.95fr]">
          <img
            className="h-full min-h-96 w-full object-cover"
            src="/images/home-bg.png"
            alt=""
          />
          <div className="p-10 sm:p-16">
            <span className="bg-[#ffe0d7] px-3 py-1 text-[11px] font-bold text-tertiary">
              Featured Event
            </span>
            <h2 className="mt-8 font-primary text-4xl leading-tight sm:text-5xl">
              <span className="mr-3 font-secondary text-3xl font-semibold">
                24
              </span>
              <em>October</em>
              <span className="mt-8 block not-italic">
                The Autumn Resonance: A Night of Collective Prayer
              </span>
            </h2>
            <p className="mt-8 max-w-md leading-8 text-primary/65">
              Join us for an immersive evening of acoustic worship and guided
              reflection. Experience a space designed for deep spiritual
              connection through music and light.
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-2 border-y border-black/10 py-6 text-sm">
              <div>
                <dt className="text-[11px] font-bold text-primary/45">Time</dt>
                <dd className="mt-2">19:00 - 21:00</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold text-primary/45">
                  Location
                </dt>
                <dd className="mt-2">The Sanctuary Loft</dd>
              </div>
            </dl>
            <div className="mt-9">
              <DesignButton>
                View Details <ArrowRight size={14} />
              </DesignButton>
            </div>
          </div>
        </article>

        <div className="mt-28 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
            <button className="border border-white/20 px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0">
              Worship
            </button>
            <button className="border border-white/20 px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0">
              Community
            </button>
            <button className="border border-white/20 px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0">
              Outreach
            </button>
          </div>
          <label className="flex items-center gap-3 border-b border-white/35 pb-3 text-white/45">
            <input
              className="w-56 bg-transparent text-sm outline-none placeholder:text-white/45"
              placeholder="Search events..."
            />
            <Search size={18} />
          </label>
        </div>
        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {eventPreviews.map((event) => (
            <EventPreviewCard key={event.title} event={event} />
          ))}
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-24 text-primary">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-primary text-4xl font-semibold italic sm:text-5xl">
            Stay in the loop
          </h2>
          <p className="mt-8 leading-8 text-primary/65">
            Receive a curated monthly digest of LISA events, stories, and
            reflections directly in your inbox.
          </p>
          <form className="mx-auto mt-12 flex max-w-md flex-col gap-5 sm:flex-row">
            <input
              className="min-h-12 flex-1 border-b border-black/20 bg-transparent outline-none"
              placeholder="Email address"
            />
            <DesignButton>Subscribe</DesignButton>
          </form>
        </div>
      </PageShell>
    </main>
  );
}
