import { Request, Response } from "express";
import { data } from "../model/data";

export const dataController = (req: Request, res: Response) => {
  res.status(200).json({ data });
};