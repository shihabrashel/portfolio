import type { ArchitectureItem } from "../types";

export const architectureItems: ArchitectureItem[] = [
  {
    title: "Clean Architecture",
    description:
      "Designing applications with clear separation of responsibilities to improve maintainability, testability, and long-term scalability.",
    concepts: [
      "Separation of Concerns",
      "Dependency Inversion",
      "Domain-driven design principles",
    ],
  },
  {
    title: "Microservices",
    description:
      "Designing independently deployable services with clear boundaries and communication through APIs and asynchronous messaging.",
    concepts: [
      "Service Boundaries",
      "Database per Service",
      "Inter-service Communication",
    ],
  },
  {
    title: "Vertical Slice Architecture",
    description:
      "Organizing application code around business features instead of technical layers, keeping related functionality together.",
    concepts: [
      "Feature-based Organization",
      "CQRS Concepts",
      "Reduced Coupling",
    ],
  },
  {
    title: "Database & API Design",
    description:
      "Building reliable APIs and SQL Server solutions with attention to performance, scalability, and maintainability.",
    concepts: ["REST APIs", "SQL Optimization", "Database Design"],
  },
];
