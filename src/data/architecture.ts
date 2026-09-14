import type { ArchitectureItem } from "../types";

export const architectureItems: ArchitectureItem[] = [
  {
    title: "Clean & Onion Architecture",
    description:
      "Applied layered architecture approaches to keep business logic separated from infrastructure and presentation concerns, improving maintainability and testability.",
    concepts: [
      "Separation of Concerns",
      "Dependency Inversion",
      "Maintainable Code Structure",
    ],
  },
  {
    title: "Microservices & API Design",
    description:
      "Worked with service-oriented application design and REST APIs, focusing on clear service responsibilities, integration, and maintainable backend systems.",
    concepts: [
      "REST APIs",
      "Service Boundaries",
      "Inter-service Communication",
    ],
  },
  {
    title: "Database Architecture",
    description:
      "Designed and worked with Microsoft SQL Server solutions for enterprise applications, including partitioned database design for large-scale operational systems.",
    concepts: [
      "SQL Server",
      "Database Partitioning",
      "Performance Optimization",
    ],
  },
  {
    title: "Full-Stack Application Design",
    description:
      "Built business applications across backend, database, and frontend layers using .NET, SQL Server, Angular, React, and related web technologies.",
    concepts: [".NET Backend", "Angular & React", "End-to-End Development"],
  },
];
