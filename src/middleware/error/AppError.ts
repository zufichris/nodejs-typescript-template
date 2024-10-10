import fs from "fs";
import { IResponseData } from "../../global/dto";
import { env } from "../../config/env";

export class AppError extends Error {
  public error: Partial<IResponseData<any>>;
  constructor(err: Partial<IResponseData<any>>) {
    super(err.message);
    this.error = err;

    const errorFilePath =
      this.stack!.split("\n")[1].split("Object.<anonymous>")[1];

    this.error.description = `${this.error.description ?? this.message}-at${
      !env.in_prod ? errorFilePath ?? this.stack : ""
    }`;

    this.error.errors = !env.in_prod
      ? [
          {
            stack: this.stack,
            name: this.name,
          },
        ]
      : undefined;
    Error.captureStackTrace(this, this.constructor);
  }

  saveLog() {
    const logsDir = "logs";
    let exists = false;
    fs.exists(logsDir, (e) => {
      exists = e;
    });
    if (!exists) fs.mkdir(logsDir, (err) => {});

    const date = new Date(Date.now());
    const data = {
      date,
      ...this.error,
    };
    fs.writeFile(
      `logs/${
        date.toJSON().split("T")[0]
      }-Time-${date.getSeconds()}sec+${date.getMinutes()}min+${date.getHours()}hrs.json`,
      JSON.stringify(data),
      "utf-8",
      (err) => {
        console.log(err);
      }
    );
  }
}
