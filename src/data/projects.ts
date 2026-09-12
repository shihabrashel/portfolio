import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Best Brains Portal Rewrite",
    description:
      "A modern business platform built with .NET 10 and React, focusing on order management, inventory, fulfillment workflows, and scalable API architecture.",
    technologies: [".NET 10", "React", "SQL Server", "REST APIs"],
    category: "EduTech",
  },
  {
    title: "AMMS Online",
    description:
      "A large-scale microfinance platform supporting business operations across thousands of branches, with a partitioned SQL Server database architecture.",
    technologies: [".NET", "SQL Server", "Microservices", "REST APIs"],
    category: "FinTech",
  },
  {
    title: "Medical Exercise & Reporting Platform",
    description:
      "A medical technology platform for patient exercise workflows and reporting, developed with layered architecture and maintainable backend services.",
    technologies: [".NET", "SQL Server", "Angular", "Onion Architecture"],
    category: "Medical Tech",
  },
];
