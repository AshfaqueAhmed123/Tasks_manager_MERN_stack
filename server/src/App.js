import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("./public"));

// routes

import todoRouter from "../src/routes/Todo.routes.js";
app.use("/api/v1", todoRouter);

export default app;
