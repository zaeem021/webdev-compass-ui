import { Target, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useGsapFadeIn, useGsapStagger } from "@/hooks/useGsap";

const values = [
  { icon: Target, title: "Clarity", desc: "No fluff. Every topic is structured to give you exactly what you need to know." },
  { icon: Heart, title: "Free Forever", desc: "Quality learning resources shouldn't cost a fortune. WebDev Guide is and always will be free." },
  { icon: Lightbulb, title: "Practical Focus", desc: "We prioritize real-world skills over theory. Learn by understanding, then build." },
  { icon: Users, title: "Community Driven", desc: "Built by developers for developers. Feedback shapes every improvement we make." },
];

const About = () => {
  const pageRef = useGsapFadeIn();
  const valuesRef = useGsapStagger(".value-card", 0.12);

  return (
    <Layout>
      <div ref={pageRef}>
        {/* Hero */}
        <section className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="gsap-fade-in">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary mb-4">
              Our Mission
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              About WebDev Guide
            </h1>
          </div>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p className="gsap-fade-in">
              WebDev Guide is a free, structured learning platform built for people who want to break into web development — whether you're a complete beginner, switching careers, or preparing for your first tech job.
            </p>
            <p className="gsap-fade-in">
              We believe learning should be clear, focused, and free from distractions. That's why we've organized everything into a logical roadmap with curated topics and hand-picked resources, so you always know what to learn next.
            </p>
            <p className="gsap-fade-in">
              Our content covers the fundamentals — HTML, CSS, JavaScript, and React — along with essential developer skills like version control, responsive design, and API integration. Each topic is broken down into digestible sections with real-world context.
            </p>
            <p className="gsap-fade-in">
              Whether you're studying on your commute or dedicating weekends to learning, WebDev Guide meets you where you are. No accounts, no paywalls — just a clean, focused path to becoming a web developer.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/50 py-20" ref={valuesRef}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground text-center mb-4">Our Values</h2>
            <p className="text-center text-muted-foreground mb-12">The principles that guide everything we build.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="value-card flex gap-4 rounded-xl border bg-card p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-2xl px-4 sm:px-6 py-20">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-10 gsap-fade-in">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is WebDev Guide really free?", a: "Yes — 100% free with no hidden costs, accounts, or paywalls." },
              { q: "Who is this platform for?", a: "Complete beginners, career switchers, and anyone who wants a structured path into web development." },
              { q: "Do I need any prior experience?", a: "Not at all. Our roadmap starts from the very basics and guides you step by step." },
              { q: "Can I use this to prepare for interviews?", a: "Absolutely. Our topics cover the core knowledge tested in frontend developer interviews." },
            ].map((faq) => (
              <div key={faq.q} className="gsap-fade-in rounded-xl border bg-card p-6">
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="gsap-fade-in mx-4 sm:mx-auto max-w-4xl mb-20 rounded-2xl bg-primary p-10 sm:p-14 text-center text-primary-foreground">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Start Learning Today</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-md mx-auto">
            Your journey into web development starts with one click.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8">
            <Link to="/roadmap">View the Roadmap <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default About;
