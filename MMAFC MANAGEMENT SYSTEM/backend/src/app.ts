import cors from "cors";
import express from "express";

import { env } from "./config/env.js";
import { healthRouter } from "./routes/health.js";
import { summaryRouter } from "./routes/summary.js";

export const app = express();

app.use(
  cors({
    origin: env.clientUrl,
  }),
);
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "MMAFC Management System API",
    docs: {
      health: "/api/health",
      summary: "/api/summary",
      modules: "/api/summary/modules",
    },
  });
});

app.use("/api/health", healthRouter);
app.use("/api/summary", summaryRouter);
