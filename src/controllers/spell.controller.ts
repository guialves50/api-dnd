import axios from "axios";
import { Request, Response } from "express";

export const getSpells = async (req: Request, res: Response) => {
  try {
    const { level } = req.query;
    let fetchUrl = `${process.env.BASE_URL}/api/spells`;
    if (level) {
      fetchUrl += `?level=${level}`;
    }

    const fetchResponse = await axios.get(fetchUrl);
    res.status(200).json(fetchResponse.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
