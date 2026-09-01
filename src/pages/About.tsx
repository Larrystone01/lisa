import {
  ArrowRight,
  HeartHandshake,
  Play,
  Smile,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DesignButton,
  Eyebrow,
  InfoCard,
  PageShell,
} from "../components/lisa-page-sections";

const missionItems = [
  "Radical Hospitality",
  "Intellectual Honesty",
  "Aesthetic Worship",
  "Active Compassion",
];

const values = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Faith",
    text: "A grounded, living spirituality that finds meaning in ancient wisdom and contemporary relevance.",
  },
  {
    icon: <UsersRound size={22} />,
    title: "Community",
    text: "The belief that we are meant to do life together, sharing in each other's joys and burdens.",
  },
  {
    icon: <Smile size={22} />,
    title: "Purpose",
    text: "Discovering the unique call on every life and empowering individuals to serve their world.",
  },
];

const guides = [
  {
    name: "Pastor, Dr. Sam Enesi",
    role: "Founding Pastor",
    image: "/images/mobilesideimg.png",
    text: "Dr. Sam leads LISA with a passion for prayer, teaching, and raising a community formed by the Spirit.",
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    image: "/images/imgborder.png",
    text: "Marcus shapes the visual and sensory experience of LISA with a thoughtful eye.",
  },
  {
    name: "Sarah Chen",
    role: "Community Care",
    image: "/images/gatheringImg.png",
    text: "Sarah oversees local outreach programs and internal community support systems.",
  },
  {
    name: "Julian Vane",
    role: "Youth & Families",
    image: "/images/lisa-circle.png",
    text: "Julian brings energy and invitation to our family ministries.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <PageShell className="py-20">
        <div className="relative min-h-155 overflow-hidden bg-[url('/images/homeprefooterbg.png')] bg-cover bg-center p-8 sm:p-14">
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative flex min-h-130 max-w-2xl flex-col justify-end">
            <Eyebrow tone="dark">LISA - Our Story</Eyebrow>
            <h1 className="mt-8 font-primary text-5xl font-semibold leading-[1.02] sm:text-7xl">
              More than a service. A community.
            </h1>
          </div>
        </div>
      </PageShell>

      <PageShell className="py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow tone="dark">Our Origins</Eyebrow>
            <h2 className="mt-6 max-w-sm font-primary text-4xl font-semibold leading-tight text-white/80">
              A Journey of Intentionality
            </h2>
            <p className="mt-8 max-w-md leading-8 text-white/45">
              LISA began not as a building, but as a conversation in a small
              living room. We were searching for a space that transcended the
              noise of modern life; a place where faith felt as authentic as the
              textures of daily experiences.
            </p>
            <p className="mt-6 max-w-md leading-8 text-white/45">
              Our vision was to create a third space for the soul: a sanctuary
              for growth, pursuit, community, art, and intellectual honesty.
            </p>
          </div>
          <div className="relative">
            <img
              className="ml-auto aspect-[1.04] w-full max-w-xl object-cover"
              src="/images/gatheringImg.png"
              alt=""
            />
            <img
              className="absolute -bottom-10 left-4 w-48 border-8 border-white object-cover sm:left-16"
              src="/images/brunch.png"
              alt=""
            />
          </div>
        </div>
      </PageShell>

      <PageShell className="bg-white py-24 text-primary sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
          <div className="relative">
            <img
              className="aspect-[0.86] w-full object-cover grayscale"
              src="/images/mobilesideimg.png"
              alt=""
            />
            <button
              aria-label="Play a message from Pastor Sam"
              className="absolute bottom-6 left-6 inline-flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-tertiary hover:text-white hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0"
            >
              <Play size={22} fill="currentColor" />
            </button>
          </div>
          <div>
            <Eyebrow>Hear From the Pastor</Eyebrow>
            <h2 className="mt-7 max-w-2xl font-primary text-4xl font-semibold leading-tight sm:text-6xl">
              A personal word from Pastor, Dr. Sam Enesi.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-primary/65">
              Whether you are visiting for the first time or finding your way
              back into community, Pastor Sam shares the heart behind LISA:
              prayer, belonging, worship, and a faith that becomes visible in
              everyday life.
            </p>
            <div className="mt-10 border-y border-black/10 py-8">
              <p className="font-primary text-3xl font-semibold italic leading-tight text-primary sm:text-4xl">
                "My prayer is that LISA becomes a home where you encounter
                Jesus, find family, and discover the purpose God has placed
                within you."
              </p>
              <p className="mt-6 max-w-xl leading-8 text-primary/65">
                We are building a community shaped by the presence of God and
                the love of people. Come with your questions, your hopes, and
                your story. There is room for you here.
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-primary/55">
                Pastor, Dr. Sam Enesi
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              <DesignButton>
                Watch Pastor's Welcome <Play size={14} fill="currentColor" />
              </DesignButton>
              <Link
                className="inline-flex min-h-0 items-center justify-center gap-2 border-b border-black/40 px-0 py-1 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:border-black hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                to="/sermons"
              >
                View Sermons <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-20 text-primary">
        <div className="grid gap-10 border-l border-black/15 pl-7 lg:grid-cols-[0.85fr_1fr_1fr]">
          <div>
            <h2 className="font-primary text-3xl font-semibold">Our Mission</h2>
            <p className="mt-5 leading-7 text-primary/65">
              To cultivate a space where faith is experienced through beauty,
              community, and the courageous pursuit of truth.
            </p>
          </div>
          {missionItems.map((item, index) => (
            <div key={item}>
              <p className="text-[10px] font-bold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-primary text-xl font-semibold">
                {item}
              </h3>
              <p className="mt-3 leading-7 text-primary/65">
                Faith is meant to be lived with clarity, courage, and beauty in
                tangible acts of service.
              </p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell className="py-24 text-center">
        <h2 className="font-primary text-4xl font-semibold text-white/80">
          Core Values
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <InfoCard key={value.title} {...value} />
          ))}
        </div>
      </PageShell>

      <PageShell className="bg-bg py-24 text-primary">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <Eyebrow>The Guides</Eyebrow>
            <h2 className="mt-7 font-primary text-4xl font-semibold sm:text-5xl">
              Human-led. Spirit-driven.
            </h2>
          </div>
          <p className="max-w-md self-end leading-7 text-primary/65">
            Meet the individuals who dedicate their lives to fostering the LISA
            community and vision.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <article key={guide.name}>
              <img
                className="aspect-[0.88] w-full object-cover"
                src={guide.image}
                alt=""
              />
              <h3 className="mt-5 text-sm font-bold">{guide.name}</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary/55">
                {guide.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-primary/65">
                {guide.text}
              </p>
            </article>
          ))}
        </div>
      </PageShell>

      <PageShell className="bg-white py-24 text-center text-primary">
        <h2 className="font-primary text-3xl font-semibold">
          Join the journey.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-primary/65">
          We would be honored to have you join us at an upcoming service or
          event. See what LISA is all about firsthand.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-5">
          <DesignButton>Plan Your Visit</DesignButton>
          <DesignButton variant="outline">Upcoming Events</DesignButton>
        </div>
      </PageShell>
    </main>
  );
}
