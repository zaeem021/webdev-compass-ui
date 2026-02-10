import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Map, BookOpen, FolderOpen, BriefcaseBusiness, CheckCircle2, Users, TrendingUp, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useGsapHero, useGsapStagger, useGsapFadeIn, gsap, ScrollTrigger } from "@/hooks/useGsap";

const features = [
  { icon: Map, title: "Roadmaps", desc: "Follow a structured path from beginner to job-ready developer.", to: "/roadmap" },
  { icon: BookOpen, title: "Topics", desc: "Deep-dive into essential web development concepts.", to: "/topics" },
  { icon: FolderOpen, title: "Resources", desc: "Curated videos, docs, and practice platforms.", to: "/resources" },
  { icon: BriefcaseBusiness, title: "Interview Prep", desc: "Get ready for technical interviews with confidence.", to: "/topics" },
];

const stats = [
  { value: "8+", label: "Curated Topics" },
  { value: "10+", label: "Free Resources" },
  { value: "8", label: "Roadmap Steps" },
  { value: "100%", label: "Free Forever" },
];

const steps = [
  { num: "01", title: "Pick a Topic", desc: "Start with HTML or follow the roadmap from step one." },
  { num: "02", title: "Learn & Practice", desc: "Read concepts, then practice with curated resources." },
  { num: "03", title: "Build Projects", desc: "Apply what you learn by building real-world projects." },
  { num: "04", title: "Get Job Ready", desc: "Polish your portfolio and prep for interviews." },
];

const testimonials = [
  { name: "Sarah K.", role: "Junior Developer", quote: "WebDev Guide gave me the structure I needed. I went from zero to landing my first dev job in 6 months." },
  { name: "James L.", role: "Career Switcher", quote: "The roadmap is brilliant — no fluff, just a clear path forward. Exactly what I was looking for." },
  { name: "Priya M.", role: "CS Student", quote: "I use this alongside my coursework. The topic breakdowns and resources are incredibly helpful." },
];

const Index = () => {
  const heroRef = useGsapHero();
  const featuresRef = useGsapStagger(".feature-card", 0.1);
  const stepsRef = useGsapStagger(".step-card", 0.15);
  const statsRef = useGsapStagger(".stat-item", 0.1);
  const pageRef = useGsapFadeIn();

  return (
    <Layout>
      <div ref={pageRef}>
        {/* Hero */}
        <section className="relative overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,hsl(234_85%_60%/0.12),transparent)]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 sm:py-36 text-center">
            <div className="hero-heading">
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary mb-6">
                🚀 Free & Open Learning Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                Learn Web Development<br className="hidden sm:block" /> the Right Way
              </h1>
            </div>
            <p className="hero-sub mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
              Structured roadmap, topics, and resources for beginners who want to build real skills and land their first dev job.
            </p>
            <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link to="/roadmap">Explore Roadmap <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                <Link to="/topics">Browse Topics</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-card" ref={statsRef}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28" ref={featuresRef}>
          <div className="text-center mb-12 gsap-fade-in">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Everything You Need to Start</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">All the building blocks for your web development journey, organized and ready to go.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Link
                key={f.title}
                to={f.to}
                className="feature-card group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
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

        {/* How It Works */}
        <section className="bg-secondary/50 py-20 sm:py-28" ref={stepsRef}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">How It Works</h2>
              <p className="mt-3 text-muted-foreground">Four simple steps to go from complete beginner to job-ready developer.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.num} className="step-card text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-lg font-bold mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="text-center mb-14 gsap-fade-in">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">What Learners Say</h2>
            <p className="mt-3 text-muted-foreground">Join hundreds of beginners who found their path with WebDev Guide.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="gsap-fade-in rounded-xl border bg-card p-6 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t">
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="gsap-fade-in mx-4 sm:mx-auto max-w-4xl mb-20 rounded-2xl bg-primary p-10 sm:p-14 text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-md mx-auto">
            Begin with the roadmap and take your first step toward becoming a web developer today.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8">
            <Link to="/roadmap">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
