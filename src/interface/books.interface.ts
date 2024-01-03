interface Book{
    id:number;
    name:string;
    pages:number;
    category?:string;
    createdAt: Date;
    updatedAt:Date;
}

type CreateBook = Pick<Book, "name" | "pages" | "category">;

type UpdateBook = Partial<CreateBook>;

export {Book,CreateBook,UpdateBook};