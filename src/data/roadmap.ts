export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const roadmapSteps: RoadmapStep[] = [
  { id: 1, title: "HTML", description: "Learn semantic markup, forms, accessibility, and the structure of every web page.", icon: "FileCode" },
  { id: 2, title: "CSS", description: "Master styling, layouts with Flexbox & Grid, responsive design, and animations.", icon: "Palette" },
  { id: 3, title: "JavaScript", description: "Understand variables, functions, DOM manipulation, events, and async programming.", icon: "Braces" },
  { id: 4, title: "React", description: "Build modern UIs with components, hooks, state management, and routing.", icon: "Component" },
  { id: 5, title: "TypeScript", description: "Add type safety to your code for better developer experience and fewer bugs.", icon: "Shield" },
  { id: 6, title: "Git & GitHub", description: "Track changes, collaborate on code, and manage projects with version control.", icon: "GitBranch" },
  { id: 7, title: "APIs & Backend", description: "Connect your frontend to real data using REST APIs and async patterns.", icon: "Server" },
  { id: 8, title: "Portfolio & Job Prep", description: "Build projects, polish your portfolio, and prepare for technical interviews.", icon: "Rocket" },
];
