import { Router } from "express";

import { dashboardModules, type DashboardSummary } from "../../../shared/src/index.js";

export const summaryRouter = Router();

summaryRouter.get("/", (_request, response) => {
  const payload: DashboardSummary = {
    activeUsers: 24,
    pendingApprovals: 6,
    generatedReports: dashboardModules.length * 4,
    systemStatus: "Healthy",
  };

  response.json(payload);
});

summaryRouter.get("/modules", (_request, response) => {
  response.json(dashboardModules);
});
