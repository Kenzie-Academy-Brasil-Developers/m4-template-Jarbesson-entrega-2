import { z } from "zod";

export const bookSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3),
  pages: z.number().min(1).positive(),
  category: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createBookSchema = bookSchema.pick({
  name: true,
  pages: true,
  category: true,
});

export const querySchema = z.object({
  search: z.string(),
});

export const updateBookSchema = createBookSchema.partial();
