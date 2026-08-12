import { ArrowRight, CalendarDays, Coffee, UsersRound } from "lucide-react";
import { DesignButton, Eyebrow, InfoCard, PageShell } from "../components/lisa-page-sections";

const expectations = [
  {
    icon: <Coffee size={24} />,
    title: "The Atmosphere",
    text: "We value presence over performance. Expect a calm, welcoming environment with coffee, quiet reflection, and honest conversation.",
  },
  {
    icon: <CalendarDays size={24} />,
    title: "The Gathering",
    text: "Our 75-minute services include modern liturgy, live music that feels like a quiet concert, and a message rooted in ancient wisdom.",
  },
  {
    icon: <UsersRound size={24} />,
    title: "The People",
    text: "You'll find people from all walks of life: students, creatives, families, and skeptics. Dress casual; wear whatever feels like you.",
  },
];

const questions = ["What about my kids?", "What should I wear?", "Where do I park?"];

export default function VisitPage() {
  return (
    <main className="bg-black text-white">
      <PageShell className="bg-[url('/images/home-bg.png')] bg-cover bg-center py-28 text-primary">
        <div className="max-w-2xl">
          <Eyebrow>Welcome to the Collective</Eyebrow>
          <h1 className="mt-8 font-primary text-6xl font-semibold leading-[0.95] sm:text-7xl">
            Your first visit starts here.
          </h1>
          <p className="mt-8 max-w-xl leading-8 text-primary/70">
            We believe faith is a journey, and every journey needs a starting point. Come as you are, whether you're
            full of questions or just looking for a community to call home.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <DesignButton>I'm Planning a Visit</DesignButton>
            <DesignButton variant="outline">View Service Times</DesignButton>
          </div>
        </div>
      </PageShell>

      <PageShell className="py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr]">
          <div>
            <h2 className="font-primary text-4xl font-semibold text-white/10 sm:text-5xl">Sundays Service</h2>
            <p className="mt-6 max-w-lg leading-8 text-white/45">
              Join us in person or online. Our gatherings are designed to be reflective, communal, and intellectually
              engaging.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 self-center">
            <div>
              <p className="text-[11px] font-bold text-white/35">Morning</p>
              <p className="mt-3 font-primary text-3xl text-white/15">09:00 AM</p>
            </div>
            <div className="border-l border-white/50 pl-10">
              <p className="text-[11px] font-bold text-white/35">Midday</p>
              <p className="mt-3 font-primary text-3xl text-white/15">11:00 AM</p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1.1fr_0.78fr]">
          <img className="h-96 w-full object-cover" src="/images/mobilebg.png" alt="" />
          <div className="bg-neutral p-10 text-primary sm:p-12">
            <Eyebrow>Location</Eyebrow>
            <h3 className="mt-6 font-primary text-3xl font-semibold">Downtown Collective</h3>
            <p className="mt-5 leading-7 text-primary/65">1240 Archive Street, Suite 400 San Francisco, CA 94103</p>
            <a className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold" href="#">
              Get Directions <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-24 text-primary">
        <h2 className="text-center font-primary text-4xl font-semibold sm:text-5xl">What to Expect</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">{expectations.map((item) => <InfoCard key={item.title} {...item} />)}</div>
      </PageShell>

      <PageShell className="py-24">
        <div className="grid gap-12 lg:grid-cols-[0.45fr_1fr]">
          <h2 className="font-primary text-4xl font-semibold text-white/10 sm:text-5xl">Common Questions</h2>
          <div className="divide-y divide-white/25">
            {questions.map((question) => (
              <article className="py-8" key={question}>
                <h3 className="font-primary text-2xl font-semibold text-white/20">{question}</h3>
                <p className="mt-4 leading-8 text-white/45">
                  There is room for you here. Our team is ready to answer questions, provide clear directions, and make
                  your first experience feel simple.
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageShell>

      <PageShell className="py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="font-primary text-5xl font-semibold leading-tight">Let us know you're coming.</h2>
            <p className="mt-8 max-w-md leading-8 text-white/45">
              We'd love to host you. Fill out this brief form and we'll have a member of our team reach out to answer
              any questions and meet you at the door.
            </p>
          </div>
          <form className="grid gap-8">
            {["Full Name", "Email Address", "Phone Number", "How can we help you?"].map((label) => (
              <label className="block border-b border-white/20" key={label}>
                <span className="text-[11px] font-bold text-white/40">{label}</span>
                <input className="block min-h-12 w-full bg-transparent outline-none placeholder:text-white/20" placeholder="Jane Cooper" />
              </label>
            ))}
            <DesignButton tone="dark">I'm Planning a Visit</DesignButton>
          </form>
        </div>
      </PageShell>
    </main>
  );
}
