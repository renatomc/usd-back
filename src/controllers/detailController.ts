import { Request, Response } from "express";
import { data } from "../model/data";

export const detailController = (req: Request, res: Response) => {
  const { id } = req.query;
  const dataDetail = data.find(dt => dt.id === Number(id));
  res.status(200).json({ data: dataDetail });
};