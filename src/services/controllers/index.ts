import { Request, Response } from "express";

export default class Controllers {
 static async getAll(req: Request, res: Response){
    try {
      await res.status(200).send("App Running");
    } catch (error) {
      //TODO
      throw error
    }
  }
}
