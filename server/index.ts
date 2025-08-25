import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 5000;

// ✅ Root route
app.get("/", (req: Request, res: Response) => {
  res.send("🚀 Backend API is running successfully...");
});

// ✅ Example API route
app.get("/api/info", (req: Request, res: Response) => {
  res.json({
    name: "Rish Tech",
    founded: 2015,
    employees: 50,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

{
  "type": "module",
  //
