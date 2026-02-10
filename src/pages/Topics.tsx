import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { topics } from "@/data/topics";

const levels = ["All", "Beginner", "Intermediate"] as const;

const Topics = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<string>("All");

  const filtered = topics.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchesLevel = level === "All" || t.level === level;
    return matchesSearch && matchesLevel;
  });

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground text-center">
          Topics
        </h1>
        <p className="mt-3 text-center text-muted-foreground">
          Explore core web development concepts at your own pace.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  level === l
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <Link
              key={t.id}
              to={`/topics/${t.id}`}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Badge
                variant={t.level === "Beginner" ? "secondary" : "default"}
                className="mb-3"
              >
                {t.level}
              </Badge>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {t.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No topics found. Try a different search or filter.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Topics;
