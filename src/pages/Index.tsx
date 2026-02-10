import { Link } from "react-router-dom";
import { Map, BookOpen, FolderOpen, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const features = [
  { icon: Map, title: "Roadmaps", desc: "Follow a structured path from beginner to job-ready developer.", to: "/roadmap" },
  { icon: BookOpen, title: "Topics", desc: "Deep-dive into essential web development concepts.", to: "/topics" },
  { icon: FolderOpen, title: "Resources", desc: "Curated videos, docs, and practice platforms.", to: "/resources" },
  { icon: BriefcaseBusiness, title: "Interview Prep", desc: "Get ready for technical interviews with confidence.", to: "/topics" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(234_85%_60%/0.12),transparent)]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
          Learn Web Development<br className="hidden sm:block" /> the Right Way
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
          Structured roadmap, topics, and resources for beginners who want to build real skills and land their first dev job.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link to="/roadmap">Explore Roadmap</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
            <Link to="/topics">Browse Topics</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Link
            key={f.title}
            to={f.to}
            className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
