import { booksDatabase } from "../database/database";
import { Book, CreateBook, UpdateBook } from "../interface/books.interface";
import { generateId } from "../utils";

export class BookServices {
  createBook = (data: CreateBook): Book => {
    const newBook: Book = {
      id: generateId(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    booksDatabase.push(newBook);

    return newBook;
  };

  getBooks = (query: string | undefined): Book[] => {
    if (query) {
      return booksDatabase.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase())
      );
    }
    return booksDatabase;
  };

  retrieveBook = (index: number): Book => {
    return booksDatabase[index];
  };

  updateBook = (index: number, data: UpdateBook): Book => {
    booksDatabase[index] = {
      ...booksDatabase[index],
      ...data,
      updatedAt: new Date(),
    };

    return booksDatabase[index];
  };

  deleteBook = (index: number): void => {
    booksDatabase.splice(index, 1);
  };
}
