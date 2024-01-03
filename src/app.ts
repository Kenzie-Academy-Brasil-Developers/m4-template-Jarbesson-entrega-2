import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { BooksErrors } from "./errors/errors.middleware";

export const app = express();
const booksErrors = new BooksErrors();

app.use(json());

app.use("/", booksRouter);

app.use(booksErrors.handleErrors);
