export type UserRole = "Administrator" | "Manager" | "Staff" | "Viewer";

export interface DashboardModule {
  key: string;
  name: string;
  description: string;
}

export interface ApiHealthResponse {
  status: "ok";
  service: string;
  timestamp: string;
}

export interface DashboardSummary {
  activeUsers: number;
  pendingApprovals: number;
  generatedReports: number;
  systemStatus: string;
}
