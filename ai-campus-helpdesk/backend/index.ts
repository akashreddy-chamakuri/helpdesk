import express from "express";
import bodyParser from "body-parser";
import { handleQuery } from "./agents/queryAgent";

const app = express();
app.use(bodyParser.json());

app.post("/ask", async (req, res) => {
  const { question } = req.body;
  const answer = await handleQuery(question);
  res.json(answer);
});

app.listen(5000, () => {
  console.log("🚀 Backend running at http://localhost:5000");
});
