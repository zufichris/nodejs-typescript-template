import { Request, Response } from "express";

export default class Controllers {
  static async getAll(req: Request, res: Response) {
    try {
     res.status(200).send("App Running");
    } catch (error) {
      //FIXME
      throw error;
    }
  }
}
