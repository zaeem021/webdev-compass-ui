import { FileCode, Palette, Braces, Component } from "lucide-react";
import Layout from "@/components/Layout";
import { roadmapSteps } from "@/data/roadmap";

const iconMap: Record<string, React.ElementType> = { FileCode, Palette, Braces, Component };

const Roadmap = () => (
  <Layout>
    <section className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-center">
        Learning Roadmap
      </h1>
      <p className="mt-3 text-center text-muted-foreground">
        Follow these steps in order to go from zero to confident web developer.
      </p>

      <div className="relative mt-14">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {roadmapSteps.map((step) => {
            const Icon = iconMap[step.icon] || FileCode;
            return (
              <div key={step.id} className="relative flex gap-5">
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-sm">
                  <Icon className="h-4 w-4" />
                </div>
                {/* Card */}
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
  </Layout>
);

export default Roadmap;
