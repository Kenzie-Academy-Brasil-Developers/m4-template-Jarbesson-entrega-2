import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { BookMiddlewares } from "../middlewares/books.middlewares";

export const booksRouter = Router();
const bookControllers = new BookControllers();
const bookMiddlewares = new BookMiddlewares();

booksRouter.post("/books",bookMiddlewares.verifyBookName,bookControllers.createBook);
booksRouter.get("/books",bookControllers.getBooks);
booksRouter.get("/books/:id", bookMiddlewares.verifyBookId, bookControllers.retreieveBook);
booksRouter.patch("/books/:id",bookMiddlewares.verifyBookName,bookMiddlewares.verifyBookId,bookControllers.updateBook);
booksRouter.delete("/books/:id",bookMiddlewares.verifyBookId,bookControllers.deleteBook);
