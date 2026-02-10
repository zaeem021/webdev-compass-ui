import { FileCode, Palette, Braces, Component, Shield, GitBranch, Server, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { roadmapSteps } from "@/data/roadmap";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/useGsap";

const iconMap: Record<string, React.ElementType> = { FileCode, Palette, Braces, Component, Shield, GitBranch, Server, Rocket };

const tips = [
  { title: "Consistency Over Speed", desc: "30 minutes every day beats 5 hours once a week. Build a daily habit." },
  { title: "Build Real Projects", desc: "Don't just read — build things. A portfolio of projects beats certificates every time." },
  { title: "Learn in Public", desc: "Share your progress on social media. Teaching reinforces learning and builds your network." },
  { title: "Embrace the Struggle", desc: "Feeling stuck is normal. Every professional developer felt the same way when they started." },
];

const Roadmap = () => {
  const timelineRef = useGsapStagger(".timeline-step", 0.15);
  const tipsRef = useGsapStagger(".tip-card", 0.12);
  const pageRef = useGsapFadeIn();

  return (
    <Layout>
      <div ref={pageRef}>
        <section className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center gsap-fade-in">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              Step-by-Step Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Learning Roadmap
            </h1>
            <p className="mt-3 text-muted-foreground">
              Follow these steps in order to go from zero to confident web developer.
            </p>
          </div>

          <div className="relative mt-14" ref={timelineRef}>
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-10">
              {roadmapSteps.map((step) => {
                const Icon = iconMap[step.icon] || FileCode;
                return (
                  <div key={step.id} className="timeline-step relative flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Step {step.id}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-secondary/50 py-20" ref={tipsRef}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground text-center mb-4">Tips for Success</h2>
            <p className="text-center text-muted-foreground mb-12">Advice from developers who've been where you are now.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {tips.map((t) => (
                <div key={t.title} className="tip-card rounded-xl border bg-card p-6">
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-2xl px-4 sm:px-6 py-20 text-center gsap-fade-in">
          <h2 className="text-2xl font-extrabold text-foreground">Start with the Fundamentals</h2>
          <p className="mt-3 text-muted-foreground">Begin with HTML and work your way through each topic.</p>
          <Button asChild size="lg" className="mt-6 rounded-full px-8">
            <Link to="/topics">Browse Topics <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Roadmap;
