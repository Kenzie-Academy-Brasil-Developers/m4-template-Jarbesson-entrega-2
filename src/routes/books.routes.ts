import { Router } from "express";
import { BookControllers } from "../controllers/books.controllers";
import { BookMiddlewares } from "../middlewares/books.middlewares";
import { validateRequest } from "../middlewares/validateCreateSchema";
import {
  createBookSchema,
  querySchema,
  updateBookSchema,
} from "../schemas/bookSchemas";
import { GlobalErrors } from "../errors/errors.middleware";

export const booksRouter = Router();
const bookControllers = new BookControllers();
const bookMiddlewares = new BookMiddlewares();
const globalErrors = new GlobalErrors();

booksRouter.post(
  "/books",
  validateRequest.execute({ body: createBookSchema }),
  bookMiddlewares.verifyBookName,
  bookControllers.createBook
);
booksRouter.get(
  "/books",
  globalErrors.validateBody({ query: querySchema }),
  bookControllers.getBooks
);
booksRouter.get(
  "/books/:id",
  bookMiddlewares.verifyBookId,
  bookControllers.retreieveBook
);
booksRouter.patch(
  "/books/:id",
  validateRequest.execute({ body: updateBookSchema }),
  bookMiddlewares.verifyBookName,
  bookMiddlewares.verifyBookId,
  bookControllers.updateBook
);
booksRouter.delete(
  "/books/:id",
  bookMiddlewares.verifyBookId,
  bookControllers.deleteBook
);
