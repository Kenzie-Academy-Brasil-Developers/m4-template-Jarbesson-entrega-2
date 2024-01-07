export class AppError extends Error {
  statuscode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statuscode = statusCode;
  }
};
