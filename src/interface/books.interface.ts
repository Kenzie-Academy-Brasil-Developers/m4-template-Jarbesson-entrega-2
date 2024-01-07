import { AnyZodObject, z } from "zod";
import {
  bookSchema,
  createBookSchema,
  querySchema,
  updateBookSchema,
} from "../schemas/bookSchemas";

type Book = z.infer<typeof bookSchema>;

type CreateBook = z.infer<typeof createBookSchema>;

type UpdateBook = z.infer<typeof updateBookSchema>;

type QueryBook = z.infer<typeof querySchema>;

interface IRequestSchema {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export { Book, CreateBook, UpdateBook, IRequestSchema, QueryBook };
