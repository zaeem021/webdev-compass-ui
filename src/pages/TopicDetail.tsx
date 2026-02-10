import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { topics } from "@/data/topics";
import { useGsapFadeIn } from "@/hooks/useGsap";

const sections = ["Overview", "Key Concepts", "Why It Matters"] as const;

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === id);
  const [activeSection, setActiveSection] = useState<string>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pageRef = useGsapFadeIn();

  const currentIndex = topics.findIndex((t) => t.id === id);
  const prevTopic = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  if (!topic) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground">Topic not found</h1>
          <Link to="/topics" className="mt-4 inline-block text-primary hover:underline">
            ← Back to Topics
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20" ref={pageRef}>
        <Link to="/topics" className="gsap-fade-in inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Topics
        </Link>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-48 shrink-0 gsap-fade-in">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-1 text-sm font-medium text-muted-foreground mb-3"
            >
              Sections <ChevronDown className={`h-4 w-4 transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
            </button>
            <nav className={`space-y-1 lg:sticky lg:top-24 ${sidebarOpen ? "block" : "hidden lg:block"}`}>
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => { setActiveSection(s); setSidebarOpen(false); }}
                  className={`block w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === s ? "bg-accent text-primary" : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="flex-1 min-w-0">
            <div className="gsap-fade-in">
              <Badge variant={topic.level === "Beginner" ? "secondary" : "default"} className="mb-3">
                {topic.level}
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {topic.title}
              </h1>
            </div>

            <div className="mt-8 space-y-10">
              {(activeSection === "Overview" || activeSection === "all") && (
                <section className="gsap-fade-in">
                  <h2 className="text-xl font-bold text-foreground mb-3">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{topic.overview}</p>
                </section>
              )}

              {(activeSection === "Key Concepts" || activeSection === "all") && (
                <section className="gsap-fade-in">
                  <h2 className="text-xl font-bold text-foreground mb-3">Key Concepts</h2>
                  <ul className="space-y-2">
                    {topic.keyConcepts.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {(activeSection === "Why It Matters" || activeSection === "all") && (
                <section className="gsap-fade-in">
                  <h2 className="text-xl font-bold text-foreground mb-3">Why It Matters</h2>
                  <p className="text-muted-foreground leading-relaxed">{topic.whyItMatters}</p>
                </section>
              )}
            </div>

            {/* Prev / Next Navigation */}
            <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4 gsap-fade-in">
              {prevTopic ? (
                <Link to={`/topics/${prevTopic.id}`} className="group rounded-xl border bg-card p-4 flex-1 hover:shadow-md transition-shadow">
                  <span className="text-xs text-muted-foreground">← Previous</span>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{prevTopic.title}</div>
                </Link>
              ) : <div />}
              {nextTopic ? (
                <Link to={`/topics/${nextTopic.id}`} className="group rounded-xl border bg-card p-4 flex-1 text-right hover:shadow-md transition-shadow">
                  <span className="text-xs text-muted-foreground">Next →</span>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{nextTopic.title}</div>
                </Link>
              ) : <div />}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default TopicDetail;
