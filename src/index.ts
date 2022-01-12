import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`
        <div>
            <h1>Hey There!</h1>
        </div>
    `);
});
