import { Router } from "express";

import type { ApiHealthResponse } from "../../../shared/src/index.js";

export const healthRouter = Router();

healthRouter.get("/", (_request, response) => {
  const payload: ApiHealthResponse = {
    status: "ok",
    service: "mmafc-backend",
    timestamp: new Date().toISOString(),
  };

  response.json(payload);
});
