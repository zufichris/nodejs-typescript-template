import dotenv from "dotenv";
import { AppError } from "../middleware/error";
import { StatusCodes } from "../global/enums";
const { error, parsed } = dotenv.config();

if (error) {
  throw new AppError({
    message: "Missing file .env",
    description: "env file is required",
    status: StatusCodes.badGateway,
  });
}

export const env = {
  in_prod: parsed!.NODE_ENV?.toLowerCase()?.includes("prod"),
  port: parsed!.PORT,
};
