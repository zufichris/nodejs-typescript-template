import { createServer } from "http";
import { env } from "../config/env";

export function Start(app: Express.Application): void {
  const server = createServer(app);
 
  server.listen(env.port, () => {
    console.log(`App running on http://localhost:${env.port}`);
  });
  server.on("connect", () => {
    console.log("Connected To Server");
  });
  server.on("error", () => {
    console.log("An Error Occurred");
  });
}
