import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
        About WebDev Guide
      </h1>

      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          WebDev Guide is a free, structured learning platform built for people who want to break into web development — whether you're a complete beginner, switching careers, or preparing for your first tech job.
        </p>
        <p>
          We believe learning should be clear, focused, and free from distractions. That's why we've organized everything into a logical roadmap with curated topics and hand-picked resources, so you always know what to learn next.
        </p>
        <p>
          Our content covers the fundamentals — HTML, CSS, JavaScript, and React — along with essential developer skills like version control, responsive design, and API integration. Each topic is broken down into digestible sections with real-world context.
        </p>
        <p>
          Whether you're studying on your commute or dedicating weekends to learning, WebDev Guide meets you where you are. No accounts, no paywalls — just a clean, focused path to becoming a web developer.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
