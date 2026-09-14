import type { AITool } from "../types";

export const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    description:
      "Used for technical research, architecture discussions, learning new technologies, interview preparation, and exploring different implementation approaches.",
    useCases: [
      "Technical Research",
      "Architecture Discussions",
      "Learning",
      "Implementation Guidance",
    ],
  },
  {
    name: "Claude",
    description:
      "Used as an AI-assisted development tool for code completion, code generation, implementation support, refactoring, and working with existing codebases.",
    useCases: [
      "Code Completion",
      "Code Generation",
      "Feature Implementation",
      "Refactoring",
    ],
  },
  {
    name: "GitHub Copilot",
    description:
      "Used for AI-assisted coding through inline code suggestions, code completion, and reducing repetitive development work.",
    useCases: [
      "Code Completion",
      "Inline Suggestions",
      "Development Productivity",
    ],
  },
];
