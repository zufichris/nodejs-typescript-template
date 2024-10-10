import express from "express";
import { Start } from "./server/httpServer";
import { errorHandler } from "./middleware/error/errorMiddleware";
import Router from "./services/routes/route_v1";
import notFoundMiddleware from "./middleware/error/notfound";
const app = express();

app.use(Router);
app.use(notFoundMiddleware);
app.use(errorHandler);
Start(app);
export default app;
