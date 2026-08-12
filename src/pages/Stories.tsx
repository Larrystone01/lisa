import { ArrowRight } from "lucide-react";
import { DesignButton, Eyebrow, PageShell, StoryCard } from "../components/lisa-page-sections";

export default function StoriesPage() {
  return (
    <main className="bg-white text-primary">
      <PageShell className="py-24 sm:py-32 lg:py-48">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Eyebrow>Voices of Transformation</Eyebrow>
            <h1 className="mt-10 max-w-2xl font-primary text-6xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">
              Real Stories. <br /> Real People.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-8 text-primary/65">
              Witness the profound shifts of faith and restoration through the lives of our community. These are not
              just words; they are living proof of hope redefined in a modern world.
            </p>
            <a className="mt-12 inline-flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em]" href="#">
              <span className="h-px w-12 bg-black" /> Explore the Collection
            </a>
          </div>
          <img className="mx-auto aspect-[0.77] w-full max-w-md object-cover" src="/images/lisa-circle.png" alt="" />
        </div>
      </PageShell>

      <PageShell className="pb-24 sm:pb-32">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.78fr]">
          <StoryCard
            eyebrow="Restoration"
            image="/images/mobilesideimg.png"
            layout="image-left"
            title='"In the quietest moments of despair, I found a voice that told me my story was not over."'
            author="Elena Vance"
            meta="Member since 2021"
          />
          <StoryCard
            eyebrow="Faith"
            image="/images/brunch.png"
            title='"Finding purpose in the ordinary."'
            description="Julian's journey from a high-pressure career to finding spiritual stillness."
            author="Julian Marks"
          />
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.55fr]">
          <StoryCard eyebrow="Purpose" title='"Community became the mirror I needed to see myself clearly again."' author="Sarah Jenkins" />
          <StoryCard
            eyebrow="Transformation"
            image="/images/imgborder.png"
            layout="feature"
            title="The Architecture of a New Life"
            description="How David rebuilt his sense of family and belonging through service and intentional community at LISA."
          />
        </div>
      </PageShell>

      <PageShell className="bg-black py-24 text-white sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow tone="dark">Every Voice Matters</Eyebrow>
          <h2 className="mt-10 font-primary text-5xl font-semibold leading-[1.04] sm:text-7xl">
            Your transformation is just beginning.
          </h2>
          <p className="mx-auto mt-9 max-w-2xl leading-8 text-white/55">
            LISA is built on the shared experiences of our community. If you have a story of hope, change, or newfound
            faith, we would be honored to hear it.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <DesignButton tone="dark">Share Your Story</DesignButton>
            <DesignButton tone="dark" variant="link">
              Contact Support <ArrowRight size={14} />
            </DesignButton>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
