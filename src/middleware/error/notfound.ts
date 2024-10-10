import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";
import { StatusCodes } from "../../global/enums";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  throw new AppError({
    message: "Resource Not Found",
    status: StatusCodes.notFound,
  });
};

export default notFoundMiddleware;
