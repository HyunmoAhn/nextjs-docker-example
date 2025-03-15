import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.prepare().then(() => {
  const server = express();

  // Custom API Route
  server.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: "Hello from Express API!" });
  });

  // Next.js page handling
  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`🚀 Custom Next.js server running at http://localhost:${port}`);
  });
});
