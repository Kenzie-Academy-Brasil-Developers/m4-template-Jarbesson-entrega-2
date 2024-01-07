import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import helmet from "helmet";
import { GlobalErrors } from "./errors/errors.middleware";

export const app = express();
const booksErrors = new GlobalErrors();

app.use(helmet());

app.use(json());

app.use("/", booksRouter);

app.use(booksErrors.handleErrors);
