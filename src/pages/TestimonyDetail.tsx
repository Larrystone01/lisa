import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  DesignButton,
  Eyebrow,
  PageShell,
} from "../components/lisa-page-sections";
import { getTestimonyBySlug, testimonies } from "../lib/testimonies";

export default function TestimonyDetailPage() {
  const { slug } = useParams();
  const testimony = getTestimonyBySlug(slug);

  if (!testimony) {
    return <Navigate to="/testimonies" replace />;
  }

  const moreTestimonies = testimonies
    .filter((item) => item.slug !== testimony.slug)
    .slice(0, 3);

  return (
    <main className="bg-white text-primary">
      <PageShell className="py-20 sm:py-28">
        <Link
          className="inline-flex items-center gap-2 border-b border-black/35 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-black hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
          to="/testimonies"
        >
          <ArrowLeft size={14} /> Back to Testimonies
        </Link>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <Eyebrow>{testimony.category} Testimony</Eyebrow>
            <h1 className="mt-7 max-w-3xl font-primary text-5xl font-semibold leading-[1.02] sm:text-7xl">
              {testimony.name}
            </h1>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary/50">
              {testimony.since}
            </p>
            <div className="mt-10 border-y border-black/10 py-8">
              <Quote className="text-tertiary" size={32} />
              <p className="mt-6 font-primary text-3xl font-semibold italic leading-tight sm:text-4xl">
                "{testimony.quote}"
              </p>
            </div>
          </div>

          <img
            className="h-100 w-full object-cover grayscale lg:h-150"
            src={testimony.image}
            alt=""
          />
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-24 text-primary">
        <article className="mx-auto max-w-3xl">
          <Eyebrow>Full Story</Eyebrow>
          <div className="mt-8 space-y-7">
            {testimony.fullStory.map((paragraph) => (
              <p className="text-lg leading-9 text-primary/70" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12">
            <DesignButton>Share Your Testimony</DesignButton>
          </div>
        </article>
      </PageShell>

      <PageShell className="bg-black py-24 text-white">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="dark">More Stories</Eyebrow>
            <h2 className="mt-6 font-primary text-4xl font-semibold sm:text-5xl">
              Keep reading.
            </h2>
          </div>
          <Link
            className="inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-white hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            to="/testimonies"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {moreTestimonies.map((item) => (
            <Link
              className="group block bg-white text-primary transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              key={item.slug}
              to={`/testimonies/${item.slug}`}
            >
              <img
                className="h-56 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02]"
                src={item.image}
                alt=""
              />
              <div className="p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary/45">
                  {item.category}
                </p>
                <h3 className="mt-4 font-primary text-2xl font-semibold leading-tight">
                  {item.name}
                </h3>
                <p className="mt-4 line-clamp-3 leading-7 text-primary/65">
                  "{item.quote}"
                </p>
              </div>
            </Link>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
