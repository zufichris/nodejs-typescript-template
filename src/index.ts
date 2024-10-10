import express from "express";
import { Start } from "./server/httpServer";
import { errorHandler, AppError } from "./middleware/error/errorMiddleware";
import Router from "./services/routes/route_v1";
import notFoundMiddleware from "./middleware/error/notfound";
const app = express();
app.use(
  express.json({
    limit: 100,
    verify(req, res, buf, encoding) {
      if (buf.byteLength > 100) {
        throw new AppError({
          message: "File size too large",
        });
      }
    },
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: 100,
    verify(req, res, buf, encoding) {
      if (buf.byteLength > 100) {
        throw new AppError({
          message: "File size too large",
        });
      }
    },
  })
);
app.use(Router);
app.use(notFoundMiddleware);
app.use(errorHandler);
Start(app);
export default app;
