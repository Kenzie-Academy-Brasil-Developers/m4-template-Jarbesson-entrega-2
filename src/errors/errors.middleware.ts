import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export class BooksErrors {
    handleErrors = (err:Error, req: Request, res: Response, next:NextFunction): Response => {
        if (err instanceof AppError) {
            return res.status(err.statuscode).json({error: err.message});
        };

        return res.status(500).json({error: "Internal server error."});
    };
};