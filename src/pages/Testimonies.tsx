import { ArrowRight, Quote, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  DesignButton,
  Eyebrow,
  PageShell,
} from "../components/lisa-page-sections";
import { testimonies, testimonyFilters } from "../lib/testimonies";

const featuredTestimony = testimonies[0];

export default function TestimoniesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const visibleTestimonies = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return testimonies.filter((testimony) => {
      const matchesFilter =
        activeFilter === "All" || testimony.category === activeFilter;
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          testimony.name,
          testimony.category,
          testimony.quote,
          testimony.story,
          testimony.since,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="bg-white text-primary">
      <PageShell className="py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.86fr]">
          <div>
            <Eyebrow>Voices of Transformation</Eyebrow>
            <h1 className="mt-8 max-w-3xl font-primary text-5xl font-semibold leading-[1.02] sm:text-7xl">
              Real stories from the LISA family.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-primary/65">
              A growing collection of testimonies from people who have
              encountered Jesus, found community, and discovered fresh courage
              for the journey.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <DesignButton>Share Your Testimony</DesignButton>
              <DesignButton variant="outline">Read Stories</DesignButton>
            </div>
          </div>

          <article className="bg-neutral">
            <img
              className="h-80 w-full object-cover grayscale sm:h-100"
              src={featuredTestimony.image}
              alt=""
            />
            <div className="p-8 sm:p-10">
              <Quote className="text-tertiary" size={32} />
              <p className="mt-6 font-primary text-3xl font-semibold italic leading-tight sm:text-4xl">
                "{featuredTestimony.quote}"
              </p>
              <p className="mt-7 text-sm font-bold">
                {featuredTestimony.name}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary/50">
                {featuredTestimony.since}
              </p>
            </div>
          </article>
        </div>
      </PageShell>

      <PageShell className="bg-black py-8 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {testimonyFilters.map((filter) => (
              <button
                className={`min-h-10 border px-5 text-[11px] font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 ${
                  activeFilter === filter
                    ? "border-white bg-white text-primary hover:bg-secondary"
                    : "border-white/25 text-white/55 hover:border-white hover:bg-white hover:text-primary"
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <label className="flex max-w-sm items-center gap-3 border-b border-white/35 pb-3 text-white/45">
            <Search size={18} />
            <input
              className="min-h-10 flex-1 bg-transparent text-sm outline-none placeholder:text-white/45"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search testimonies..."
              value={searchTerm}
            />
          </label>
        </div>
      </PageShell>

      <PageShell className="bg-neutral py-24 text-primary">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonies.map((testimony) => (
            <article
              className="group flex min-h-full flex-col bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              key={testimony.name}
            >
              <div className="relative overflow-hidden">
                <img
                  className="h-72 w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                  src={testimony.image}
                  alt=""
                />
                <span className="absolute left-5 top-5 bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]">
                  {testimony.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <Quote className="text-tertiary" size={24} />
                <h2 className="mt-5 font-primary text-2xl font-semibold italic leading-tight">
                  "{testimony.quote}"
                </h2>
                <p className="mt-5 leading-7 text-primary/65">
                  {testimony.story}
                </p>
                <div className="mt-auto pt-8">
                  <p className="text-sm font-bold">{testimony.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary/50">
                    {testimony.since}
                  </p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 border-b border-black/35 pb-1 text-[11px] font-bold uppercase tracking-[0.14em] transition hover:border-black hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                    to={`/testimonies/${testimony.slug}`}
                  >
                    Read Full Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {visibleTestimonies.length === 0 && (
          <div className="bg-white p-10 text-center">
            <h2 className="font-primary text-3xl font-semibold">
              No testimonies found.
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-7 text-primary/65">
              Try another category or search term to keep exploring the stories.
            </p>
          </div>
        )}
      </PageShell>

      <PageShell className="bg-white py-24 text-center text-primary">
        <Eyebrow>Every Voice Matters</Eyebrow>
        <h2 className="mx-auto mt-7 max-w-2xl font-primary text-4xl font-semibold leading-tight sm:text-5xl">
          Your story can strengthen someone else's faith.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl leading-8 text-primary/65">
          If God has met you through LISA, we would be honored to hear it and
          help you share it with care.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <DesignButton>Submit Testimony</DesignButton>
          <DesignButton variant="outline">Talk to Care Team</DesignButton>
        </div>
      </PageShell>
    </main>
  );
}
