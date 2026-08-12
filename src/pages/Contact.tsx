import { ArrowRight } from "lucide-react";
import { DesignButton, Eyebrow, Field, PageShell } from "../components/lisa-page-sections";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageShell className="py-24 sm:py-36">
        <div className="mb-20 max-w-3xl">
          <h1 className="font-primary text-6xl font-semibold leading-[0.98] text-white/10 sm:text-8xl">
            We'd love to <em className="font-normal">hear from you.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-xl leading-9 text-white/35">
            Your experience matters to us. Whether you have a question, a testimony, or a prayer request, LISA is here
            to listen and walk alongside you.
          </p>
        </div>
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.2fr]">
          <div className="relative hidden lg:block">
            <img className="h-[570px] w-full object-cover" src="/images/sideimg.png" alt="" />
            <div className="absolute -bottom-10 right-[-50px] max-w-xs bg-secondary p-12 text-primary">
              <Eyebrow>Our Promise</Eyebrow>
              <p className="mt-7 text-xl leading-8 text-primary/65">
                "Every voice is a part of our symphony. We review every message with intentional care."
              </p>
            </div>
          </div>
          <form className="bg-neutral text-primary">
            <div className="grid gap-x-14 p-8 sm:p-12 md:grid-cols-2">
              <Field label="Name (Optional)" placeholder="John Doe" />
              <Field label="Email (Optional)" placeholder="john@example.com" />
              <Field label="Feedback Type" placeholder="General Inquiry" large />
              <Field label="Your Message" placeholder="Share your thoughts with us..." large />
              <p className="mt-10 max-w-xs text-[13px] font-bold leading-5 tracking-[0.14em] text-primary/80">
                Your privacy is important to us. Information shared is treated with respect.
              </p>
              <div className="mt-10 flex md:justify-end">
                <DesignButton>
                  Send Feedback <ArrowRight size={16} />
                </DesignButton>
              </div>
            </div>
          </form>
        </div>
      </PageShell>
    </main>
  );
}
