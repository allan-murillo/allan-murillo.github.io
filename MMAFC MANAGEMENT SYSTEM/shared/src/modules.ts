import type { DashboardModule, UserRole } from "./types";

export const dashboardModules: DashboardModule[] = [
  {
    key: "members",
    name: "Members",
    description: "Manage student profiles, memberships, attendance, and rank progress.",
  },
  {
    key: "coaches",
    name: "Coaches",
    description: "Track instructors, schedules, certifications, and assigned classes.",
  },
  {
    key: "classes",
    name: "Classes",
    description: "Organize martial arts and fitness sessions, timetables, and room allocation.",
  },
  {
    key: "users",
    name: "User Management",
    description: "Create, update, and control staff and admin accounts.",
  },
  {
    key: "records",
    name: "Training Records",
    description: "Store belt assessments, waivers, fitness records, and performance logs.",
  },
  {
    key: "inventory",
    name: "Inventory",
    description: "Track uniforms, gloves, pads, gym equipment, and retail stock.",
  },
  {
    key: "reports",
    name: "Reports",
    description: "Generate attendance, revenue, membership, and instructor activity reports.",
  },
];

export const userRoles: UserRole[] = ["Administrator", "Manager", "Staff", "Viewer"];
