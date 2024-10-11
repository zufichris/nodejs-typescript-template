import { Request, Response } from "express";
import { CreateUser } from "../../../domain/useCases/CreateUser";
import { UserRepositoryImpl } from "../../../data/orm/repository/UserRepositoryImpl";
import { UserModel } from "../../../data/orm/models/user";
import { AppError } from "../../../global/error";

class Controllers {
  private readonly createUserUseCase: CreateUser;

  constructor(private readonly userRepositoryImpl: UserRepositoryImpl) {
    this.createUserUseCase = new CreateUser(userRepositoryImpl);
  }

  static async getAll(req: Request, res: Response) {
    try {
      res.status(200).send("App Running");
    } catch (error) {
      throw error;
    }
  }
  async createUser(req: Request, res: Response) {
    try {
        console.log("Heereee")
        console.log(this.createUserUseCase)
      const result = await this.createUserUseCase.execute({
        email: "john@gmail.com",
        firstName: "John",
      });
      //Cannot read properties of undefined (reading 'createUserUseCase
      res.status(result.status).json(result);
    } catch (error:any) {
     throw new AppError({
        message:error?.message
     })
    }
  }
}

export const userControllers = new Controllers(
  new UserRepositoryImpl(UserModel)
);
