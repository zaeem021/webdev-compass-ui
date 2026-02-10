import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { resources } from "@/data/resources";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/useGsap";

const typeBadgeVariant = (type: string) => {
  switch (type) {
    case "Video": return "default";
    case "Docs": return "secondary";
    case "Practice": return "outline";
    default: return "secondary";
  }
};

const Resources = () => {
  const pageRef = useGsapFadeIn();
  const gridRef = useGsapStagger(".resource-card", 0.08);

  return (
    <Layout>
      <div ref={pageRef}>
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center gsap-fade-in">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              Hand-picked for Beginners
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Resources
            </h1>
            <p className="mt-3 text-muted-foreground">
              Curated tools, tutorials, and platforms to accelerate your learning.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" ref={gridRef}>
            {resources.map((r) => (
              <div
                key={r.id}
                className="resource-card flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <Badge variant={typeBadgeVariant(r.type) as any} className="self-start mb-3">
                  {r.type}
                </Badge>
                <h3 className="font-semibold text-foreground">{r.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground flex-1">{r.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-5 self-start gap-1.5">
                  <a href={r.url} target="_blank" rel="noopener noreferrer">
                    Visit Resource <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Suggestion Banner */}
        <section className="gsap-fade-in mx-4 sm:mx-auto max-w-4xl mb-20 rounded-2xl border bg-card p-10 sm:p-14 text-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">Not Sure Where to Start?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Follow our roadmap for a guided learning experience, or browse topics to dive into a specific subject.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/roadmap">View Roadmap <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/topics">Browse Topics</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resources;
