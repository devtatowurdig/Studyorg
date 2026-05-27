import cors from "cors";
import express from "express";

import authRouter  from "./routes/auth";
import calendarRouter from "./routes/calendar";
import dashboardRouter from "./routes/dashboard";
import tasksRouter from "./routes/tasks";
import usersRouter from "./routes/users";

const app = express();
const port = process.env.API_PORT || 3000;

// Configure CORS to allow requests from frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3070",
  credentials: true,
  optionsSuccessStatus: 200,
};

// Support multiple frontend URLs (dev and production)
const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:3070",
  "http://localhost:3070",
  "http://localhost:4200",
  "http://127.0.0.1:3070",
  "http://127.0.0.1:4200",
  "http://studyorg.frameworksenac.com.br:3070",
  "https://studyorg.frameworksenac.com.br:3070",
  "http://studyorg.frameworksenac.com.br",
  "https://studyorg.frameworksenac.com.br",
];

const corsOptionsWithMultipleOrigins = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptionsWithMultipleOrigins));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API: Studio Org - Organize seus estudos");
});

app.use("/auth", authRouter);
app.use("/calendar", calendarRouter);
app.use("/dashboard", dashboardRouter);
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`[BACKEND] - Servidor rodando na porta ${port}`);
});
