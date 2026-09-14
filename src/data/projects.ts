import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "SobSomoi News Portal",
    description:
      "Developed a modern news portal for publishing and managing news content, built with .NET 8, Angular 19, and Microsoft SQL Server. Applied Vertical Slice Architecture to organize features by business use case and keep the application maintainable and scalable.",
    technologies: [
      "C#",
      ".NET 8",
      "Angular 19",
      "Microsoft SQL Server",
      "Vertical Slice Architecture",
    ],
    category: "News & Media",
    link: "https://sobsomoi.com/",
  },
  {
    title: "ASA Microfinance Management System",
    description:
      "A large-scale microfinance platform designed to support operations across 3,000+ branches. Contributed to application architecture, partitioned SQL Server database design, reporting, and backend development.",
    technologies: [
      ".NET",
      "ASP.NET Web API",
      "Angular",
      "AngularJS",
      "SQL Server",
      "Microservices",
    ],
    category: "FinTech",
  },
  {
    title: "Best Brains Portal Rewrite",
    description:
      "A modern business platform built with .NET and React, focusing on APIs, business workflows, data management, and full-stack feature development.",
    technologies: [".NET", "React", "SQL Server", "REST APIs", "Microservices"],
    category: "EduTech",
    link: "https://bestbrains.com/",
  },
  {
    title: "Medical Software Platform",
    description:
      "Worked on a medical technology platform supporting patient workflows and reporting, with a focus on maintainable backend services and database-driven functionality.",
    technologies: [".NET", "SQL Server", "jQuery", "Onion Architecture"],
    category: "Medical Tech",
    link: "https://mymedicalhub.com/",
  },
  {
    title: "Hoxro Legal Management Software",
    description:
      "Contributed to the development of a legal management software platform designed to support law firms and legal workflows. Developed full-stack features using .NET Core, Angular, and Microsoft SQL Server, including backend functionality, database-driven features, and user-facing application components.",
    technologies: [
      "C#",
      ".NET Core 3.1",
      "Angular 8",
      "Microsoft SQL Server",
      "Onion Architecture",
    ],
    category: "LegalTech",
    link: "https://www.hoxro.com/",
  },
];
