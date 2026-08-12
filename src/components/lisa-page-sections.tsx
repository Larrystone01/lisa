import type { ReactNode } from "react";
import { ArrowRight, Clock3 } from "lucide-react";

type Tone = "light" | "dark";

type ShellProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

type ButtonProps = {
  children: ReactNode;
  tone?: Tone;
  variant?: "solid" | "outline" | "link";
};

type StoryCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  author?: string;
  meta?: string;
  layout?: "image-left" | "image-top" | "feature";
};

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  text: string;
};

type EventPreview = {
  tag: string;
  image: string;
  date: string;
  month: string;
  title: string;
  text: string;
  time: string;
};

export function PageShell({ children, className = "", innerClassName = "" }: ShellProps) {
  return (
    <section className={className}>
      <div className={`mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase leading-4 tracking-[0.18em] ${
        tone === "dark" ? "text-white/45" : "text-primary/50"
      }`}
    >
      {children}
    </p>
  );
}

export function DesignButton({ children, tone = "light", variant = "solid" }: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-7 text-center text-[11px] font-bold uppercase tracking-[0.16em] transition";
  const styles = {
    solid: tone === "dark" ? "bg-white text-black hover:bg-secondary" : "bg-black text-white hover:bg-primary/85",
    outline:
      tone === "dark"
        ? "border border-white/65 text-white hover:bg-white hover:text-black"
        : "border border-black text-black hover:bg-black hover:text-white",
    link:
      tone === "dark"
        ? "min-h-0 border-b border-white/35 px-0 py-1 text-white hover:border-white"
        : "min-h-0 border-b border-black/40 px-0 py-1 text-black hover:border-black",
  };

  return (
    <a className={`${base} ${styles[variant]}`} href="#">
      {children}
    </a>
  );
}

export function StoryCard({
  eyebrow,
  title,
  description,
  image,
  author,
  meta,
  layout = "image-top",
}: StoryCardProps) {
  if (layout === "image-left") {
    return (
      <article className="grid overflow-hidden border border-black/10 bg-neutral md:grid-cols-[1fr_0.85fr]">
        {image && <img className="h-full min-h-80 w-full object-cover grayscale" src={image} alt="" />}
        <div className="flex min-h-80 flex-col justify-center p-8 sm:p-10">
          <span className="mb-9 w-fit bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]">
            {eyebrow}
          </span>
          <h3 className="font-primary text-3xl font-semibold italic leading-9 text-primary sm:text-4xl">{title}</h3>
          {author && <p className="mt-8 text-sm font-bold">{author}</p>}
          {meta && <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/55">{meta}</p>}
          <a className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]" href="#">
            Read Story <ArrowRight size={14} />
          </a>
        </div>
      </article>
    );
  }

  if (layout === "feature") {
    return (
      <article className="grid overflow-hidden border border-black/10 bg-white md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h3 className="mt-8 max-w-sm font-primary text-4xl font-semibold leading-[1.02] text-primary sm:text-5xl">
            {title}
          </h3>
          {description && <p className="mt-6 max-w-sm leading-7 text-primary/65">{description}</p>}
          <div className="mt-8">
            <DesignButton>Read Feature Story</DesignButton>
          </div>
        </div>
        {image && <img className="h-full min-h-80 w-full object-cover" src={image} alt="" />}
      </article>
    );
  }

  return (
    <article className="border border-black/10 bg-neutral">
      {image && <img className="h-80 w-full object-cover" src={image} alt="" />}
      <div className="p-8 sm:p-9">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-7 font-primary text-3xl font-semibold leading-tight text-primary">{title}</h3>
        {description && <p className="mt-5 leading-7 text-primary/65">{description}</p>}
        {author && <p className="mt-7 text-sm font-bold">{author}</p>}
        <a className="mt-4 inline-flex border-b border-black text-[11px] font-bold uppercase tracking-[0.12em]" href="#">
          Explore Story
        </a>
      </div>
    </article>
  );
}

export function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <article className="bg-white p-8 sm:p-10">
      {icon && <div className="mb-7 text-primary">{icon}</div>}
      <h3 className="font-primary text-2xl font-semibold text-primary">{title}</h3>
      <p className="mt-4 leading-7 text-primary/65">{text}</p>
    </article>
  );
}

export function EventPreviewCard({ event }: { event: EventPreview }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <img
          className="aspect-square w-full object-cover grayscale transition duration-500 group-hover:scale-105"
          src={event.image}
          alt=""
        />
        <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
          {event.tag}
        </span>
      </div>
      <div className="mt-6 grid grid-cols-[48px_1fr] gap-5">
        <div className="font-primary text-3xl font-bold leading-7 text-white/25">
          {event.date}
          <span className="block font-secondary text-[11px] uppercase tracking-[0.16em]">{event.month}</span>
        </div>
        <div>
          <h3 className="font-primary text-2xl font-semibold text-white/25">{event.title}</h3>
          <p className="mt-3 line-clamp-2 leading-7 text-white/35">{event.text}</p>
          <p className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">
            <Clock3 size={13} /> {event.time}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Field({
  label,
  placeholder,
  large = false,
}: {
  label: string;
  placeholder: string;
  large?: boolean;
}) {
  return (
    <label className={`block border-b border-black/25 ${large ? "md:col-span-2" : ""}`}>
      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">{label}</span>
      <textarea
        className={`w-full resize-none bg-transparent py-5 text-lg outline-none placeholder:text-slate-500 ${
          large ? "h-44" : "h-16"
        }`}
        placeholder={placeholder}
      />
    </label>
  );
}
