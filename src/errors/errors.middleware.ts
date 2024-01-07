import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError } from "zod";
import { IRequestSchema } from "../interface/books.interface";

export class GlobalErrors {
  handleErrors = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (err instanceof AppError) {
      return res.status(err.statuscode).json({ error: err.message });
    } else if (err instanceof ZodError) {
      return res.status(409).json(err);
    } else {
      return res.status(500).json({ error: "Internal server error." });
    }
  };

  validateBody = (schemas: IRequestSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params);
      }
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }
      if (schemas.query && Object.keys(req.query).length) {
        req.query = await schemas.query.parseAsync(req.query);
      }
      return next();
    };
  };
}
