import axios from "axios";
import { Router, Request, Response } from "express";
import { getSpells } from "../controllers/spell.controller";
const server = Router();

server.get("/api", async (req: Request, res: Response) => {
  try {
    const dndApi = await axios.get(`${process.env.BASE_URL}/api`);
    res.status(200).json(dndApi.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

server.get("/api/spells", getSpells);

export default server;
