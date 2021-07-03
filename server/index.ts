import express, { Request, Response } from "express";
import next from "next";

const { PORT = 3000, NODE_ENV = "development" } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(PORT, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${PORT} - env ${NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
