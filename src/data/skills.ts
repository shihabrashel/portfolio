export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      "C#",
      ".NET",
      ".NET Core",
      ".NET Framework",
      "ASP.NET",
      "ASP.NET MVC",
      "ASP.NET Web API",
      "REST APIs",
      "Entity Framework",
      "Entity Framework Core",
      "Dapper",
      "LINQ",
      "ADO.NET",
      "Windows Services",
      "Background Services",
    ],
  },
  {
    category: "Database",
    skills: ["Microsoft SQL Server", "SQL", "SQL Server Programming"],
  },
  {
    category: "Frontend",
    skills: [
      "Angular",
      "AngularJS",
      "React",
      "TypeScript",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Microservices",
      "Clean Architecture",
      "Onion Architecture",
      "Vertical Slice Architecture",
      "CQRS",
    ],
  },
  {
    category: "Design Patterns & Principles",
    skills: [
      "SOLID Principles",
      "Dependency Injection",
      "Repository Pattern",
      "Unit of Work Pattern",
      "Strategy Pattern",
      "Factory Pattern",
      "Chain of Responsibility Pattern",
      "Mediator Pattern",
    ],
  },
  {
    category: "Testing",
    skills: ["Unit Testing", "Integration Testing"],
  },
];
