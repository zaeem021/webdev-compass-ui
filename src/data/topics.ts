export interface Topic {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate";
  description: string;
  overview: string;
  keyConcepts: string[];
  whyItMatters: string;
}

export const topics: Topic[] = [
  {
    id: "html-basics",
    title: "HTML Basics",
    level: "Beginner",
    description: "Learn the foundational building blocks of every web page.",
    overview: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using a series of elements that tell the browser how to display content.",
    keyConcepts: ["Elements & Tags", "Attributes", "Semantic HTML", "Forms & Inputs", "Accessibility basics"],
    whyItMatters: "HTML is the skeleton of every website. Without a solid understanding of HTML, it's impossible to build reliable, accessible, and well-structured web experiences."
  },
  {
    id: "css-fundamentals",
    title: "CSS Fundamentals",
    level: "Beginner",
    description: "Style and layout your web pages with modern CSS techniques.",
    overview: "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. From colors and fonts to complex layouts, CSS transforms raw structure into polished designs.",
    keyConcepts: ["Selectors & Specificity", "Box Model", "Flexbox", "CSS Grid", "Responsive Design"],
    whyItMatters: "Great user experiences rely on clean visual design. CSS gives you the power to create responsive, beautiful interfaces that work across all devices."
  },
  {
    id: "javascript-essentials",
    title: "JavaScript Essentials",
    level: "Beginner",
    description: "Add interactivity and dynamic behavior to your websites.",
    overview: "JavaScript is the programming language of the web. It enables interactive features like form validation, dynamic content updates, animations, and much more.",
    keyConcepts: ["Variables & Data Types", "Functions", "DOM Manipulation", "Events", "ES6+ Syntax"],
    whyItMatters: "JavaScript brings web pages to life. It's the most widely-used programming language in the world, making it an essential skill for any web developer."
  },
  {
    id: "react-basics",
    title: "React Basics",
    level: "Intermediate",
    description: "Build modern user interfaces with component-based architecture.",
    overview: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.",
    keyConcepts: ["Components & JSX", "Props & State", "Hooks", "Component Lifecycle", "Conditional Rendering"],
    whyItMatters: "React is the most popular frontend library, used by companies like Meta, Netflix, and Airbnb. Learning React opens doors to modern web development careers."
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    level: "Beginner",
    description: "Create layouts that adapt beautifully to any screen size.",
    overview: "Responsive design ensures your website looks and works great on phones, tablets, and desktops. It uses flexible grids, media queries, and fluid images.",
    keyConcepts: ["Media Queries", "Mobile-First Approach", "Fluid Layouts", "Viewport Units", "Breakpoints"],
    whyItMatters: "Over 60% of web traffic comes from mobile devices. Responsive design is not optional — it's a core requirement for modern web development."
  },
  {
    id: "git-version-control",
    title: "Git & Version Control",
    level: "Beginner",
    description: "Track changes, collaborate, and manage your codebase professionally.",
    overview: "Git is a distributed version control system that tracks changes in your code. It enables collaboration, code review, and safe experimentation through branching.",
    keyConcepts: ["Repositories", "Commits & Branches", "Merging & Pull Requests", "Conflict Resolution", "GitHub Workflow"],
    whyItMatters: "Every professional development team uses Git. Understanding version control is essential for collaboration and is expected in every developer job."
  },
  {
    id: "typescript-intro",
    title: "TypeScript Introduction",
    level: "Intermediate",
    description: "Add type safety to your JavaScript for more reliable code.",
    overview: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It helps catch errors early and makes large codebases easier to maintain.",
    keyConcepts: ["Type Annotations", "Interfaces", "Generics", "Enums", "Type Inference"],
    whyItMatters: "TypeScript is rapidly becoming the industry standard. It reduces bugs, improves developer experience, and is required by many modern frameworks and companies."
  },
  {
    id: "api-integration",
    title: "API Integration",
    level: "Intermediate",
    description: "Connect your frontend to real-world data using REST APIs.",
    overview: "APIs (Application Programming Interfaces) allow your frontend to communicate with servers and external services. Learning to fetch, send, and handle data is crucial for dynamic apps.",
    keyConcepts: ["REST Principles", "Fetch API", "Async/Await", "Error Handling", "JSON Data"],
    whyItMatters: "Almost every modern web application relies on APIs for data. Understanding API integration is what separates static pages from fully functional applications."
  },
];
