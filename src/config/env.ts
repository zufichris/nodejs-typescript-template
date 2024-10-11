import dotenv from "dotenv";
import { StatusCodes } from "../global/enums";
import { AppError } from "../global/error";
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
  mongo_uri:parsed!.MongoDB_URI
};
