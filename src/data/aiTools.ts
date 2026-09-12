import type { AITool } from "../types";

export const aiTools: AITool[] = [
  {
    name: "Claude",
    description:
      "Used as an AI coding assistant for understanding existing code, implementing features, refactoring, and exploring technical solutions.",
    useCases: [
      "Code implementation",
      "Refactoring",
      "Code analysis",
      "Technical problem solving",
    ],
  },
  {
    name: "ChatGPT",
    description:
      "Used for learning, debugging, architecture discussions, interview preparation, and exploring different implementation approaches.",
    useCases: [
      "Learning",
      "Architecture discussions",
      "Debugging",
      "Technical research",
    ],
  },
  {
    name: "GitHub Copilot",
    description:
      "Used for accelerating day-to-day coding by generating code suggestions and reducing repetitive development work.",
    useCases: [
      "Code completion",
      "Boilerplate generation",
      "Developer productivity",
    ],
  },
];
