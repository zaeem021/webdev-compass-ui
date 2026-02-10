import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { resources } from "@/data/resources";

const typeBadgeVariant = (type: string) => {
  switch (type) {
    case "Video": return "default";
    case "Docs": return "secondary";
    case "Practice": return "outline";
    default: return "secondary";
  }
};

const Resources = () => (
  <Layout>
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-center">
        Resources
      </h1>
      <p className="mt-3 text-center text-muted-foreground">
        Curated tools, tutorials, and platforms to accelerate your learning.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((r) => (
          <div
            key={r.id}
            className="flex flex-col rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
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
  </Layout>
);

export default Resources;
