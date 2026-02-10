export interface Resource {
  id: string;
  name: string;
  type: "Video" | "Docs" | "Practice";
  description: string;
  url: string;
}

export const resources: Resource[] = [
  { id: "1", name: "MDN Web Docs", type: "Docs", description: "The gold standard reference for HTML, CSS, and JavaScript documentation.", url: "https://developer.mozilla.org" },
  { id: "2", name: "freeCodeCamp", type: "Practice", description: "Free interactive coding challenges covering the full web development stack.", url: "https://www.freecodecamp.org" },
  { id: "3", name: "The Odin Project", type: "Practice", description: "A full-stack curriculum with hands-on projects and a supportive community.", url: "https://www.theodinproject.com" },
  { id: "4", name: "Traversy Media", type: "Video", description: "Practical, project-based video tutorials for modern web technologies.", url: "https://www.youtube.com/@TraversyMedia" },
  { id: "5", name: "CSS-Tricks", type: "Docs", description: "In-depth articles, guides, and almanac entries for CSS and frontend topics.", url: "https://css-tricks.com" },
  { id: "6", name: "JavaScript.info", type: "Docs", description: "A modern, comprehensive tutorial covering JavaScript from basics to advanced.", url: "https://javascript.info" },
  { id: "7", name: "Scrimba", type: "Video", description: "Interactive screencasts where you can pause and edit the instructor's code.", url: "https://scrimba.com" },
  { id: "8", name: "LeetCode", type: "Practice", description: "Practice coding problems to prepare for technical interviews.", url: "https://leetcode.com" },
  { id: "9", name: "React Official Docs", type: "Docs", description: "The official React documentation with interactive examples and tutorials.", url: "https://react.dev" },
];
