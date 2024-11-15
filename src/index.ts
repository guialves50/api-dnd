import express from "express";
import dotenv from "dotenv";
import server from "./router/router";
dotenv.config({ path: "../.env" });

const app = express();

app.use(express.json());
app.use(server);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

app.listen(Number(process.env.PORT), () => {
  console.log(`Express server listening on ${process.env.PORT}`);
});
