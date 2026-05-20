import {
  AppWindow,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  FolderKanban,
  GitBranch,
  Globe,
  Layers3,
  Phone,
  ServerCog,
  ShieldCheck,
  SmartphoneCharging,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "8+", label: "Flagship systems designed and delivered" },
  { value: "End-to-end", label: "Architecture, UI, API, and database ownership" },
  { value: "Business-first", label: "Focused on reliable tools for real operations" }
];

export const skills = [
  { label: "C# / .NET Framework / WinForms", icon: Code2 },
  { label: "MSSQL / MySQL", icon: Database },
  { label: "PHP", icon: ServerCog },
  { label: "React + TypeScript", icon: AppWindow },
  { label: "AWS Cloud", icon: CloudCog },
  { label: "REST API", icon: Workflow },
  { label: "Git / GitHub", icon: GitBranch },
  { label: "System Design and Database Design", icon: Layers3 }
];

export const services = [
  {
    title: "Desktop Application Development",
    description:
      "Custom WinForms and .NET desktop tools built for accounting, operations, inventory, and internal business workflows.",
    icon: SmartphoneCharging
  },
  {
    title: "Web-Based Management Systems",
    description:
      "Secure, responsive business platforms for administration, monitoring, reporting, and multi-user workflows.",
    icon: Globe
  },
  {
    title: "Database Design and Optimization",
    description:
      "Structured schemas, fast queries, reporting-friendly models, and stable data flows for long-term maintainability.",
    icon: Database
  },
  {
    title: "Cloud Deployment using AWS",
    description:
      "Deployments for scalable hosting, backups, and production-ready environments using AWS cloud services.",
    icon: CloudCog
  },
  {
    title: "Website Development",
    description:
      "Professional websites and product-facing interfaces designed to communicate clearly and load fast on all devices.",
    icon: BriefcaseBusiness
  },
  {
    title: "System Maintenance and Support",
    description:
      "Ongoing fixes, enhancements, performance tuning, and support for systems that need to stay dependable over time.",
    icon: ShieldCheck
  }
];

export const projects = [
  {
    title: "Accounting System",
    summary:
      "A business accounting platform focused on transaction tracking, financial records, reporting, and operational accuracy.",
    tags: ["C#", ".NET Framework", "WinForms", "MSSQL"],
    accent: "coral",
    image: "./projects/accounting-system.svg"
  },
  {
    title: "Payroll System",
    summary:
      "Payroll automation with attendance integration, salary computation, deductions, employee records, and printable summaries.",
    tags: ["C#", "WinForms", "MSSQL", "Automation"],
    accent: "teal",
    image: "./projects/payroll-system.svg"
  },
  {
    title: "Martial Arts Management System",
    summary:
      "A management tool for student profiles, payment records, schedules, classes, and progress monitoring.",
    tags: ["PHP", "MySQL", "Management", "Reporting"],
    accent: "gold",
    image: "./projects/martial-arts-management-system.svg"
  },
  {
    title: "QR Code Attendance System",
    summary:
      "A fast attendance platform using QR workflows for check-in, monitoring, and exportable time-based reports.",
    tags: ["React", "TypeScript", "REST API", "QR Code"],
    accent: "blue",
    image: "./projects/qr-code-attendance-system.svg"
  },
  {
    title: "Receipt Recording System",
    summary:
      "A recordkeeping solution for receipts, categorization, searchable logs, and streamlined audit-friendly retrieval.",
    tags: ["Desktop", "Database", "Records", "Search"],
    accent: "coral",
    image: "./projects/receipt-recording-system.svg"
  },
  {
    title: "Website Development Projects",
    summary:
      "A collection of business-focused websites designed for credibility, lead generation, and responsive presentation.",
    tags: ["React", "TypeScript", "UI", "Responsive"],
    accent: "teal",
    image: "./projects/website-development-projects.svg"
  },
  {
    title: "Dental Clinic Management System",
    summary:
      "Clinic scheduling, patient history, treatment records, billing, and staff workflow support in one structured system.",
    tags: ["Management", "MySQL", "Scheduling", "Billing"],
    accent: "gold",
    image: "./projects/dental-clinic-management-system.svg"
  },
  {
    title: "Invoicing System",
    summary:
      "Invoice creation and tracking with customer records, itemized billing, status monitoring, and printable outputs.",
    tags: ["Business", "C#", "MSSQL", "Reports"],
    accent: "blue",
    image: "./projects/invoicing-system.svg"
  }
];

export const experienceHighlights = [
  {
    title: "Business systems that solve operational problems",
    description:
      "Delivered software for accounting, payroll, attendance, clinics, billing, and administration where data accuracy matters."
  },
  {
    title: "Structured database thinking from day one",
    description:
      "Designs tables, relationships, and queries with reporting, performance, and future maintenance in mind."
  },
  {
    title: "Interfaces made for real users, not just demos",
    description:
      "Builds practical screens and workflows that keep navigation simple, reduce friction, and support daily use."
  },
  {
    title: "Secure and maintainable implementation",
    description:
      "Applies clean architecture, defensive coding, and stable deployment practices across desktop, web, and cloud solutions."
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FolderKanban },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: BriefcaseBusiness },
  { label: "Email", href: "mailto:allan@example.com", icon: Phone }
];
