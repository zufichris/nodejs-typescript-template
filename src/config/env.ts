import dotenv from "dotenv";
const { error, parsed } = dotenv.config();

if (error) {
  throw new Error("Missing .env file");
}

export const env = {
  in_prod: parsed!.NODE_ENV?.toLowerCase()?.includes("prod"),
  port: parsed!.PORT,
  mongo_uri: parsed!.MongoDB_URI,
};
