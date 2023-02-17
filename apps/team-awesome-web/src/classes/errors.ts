export class NotFoundError extends Error {
  constructor(errorMessage?: string) {
    super(errorMessage || "Temp message");
    this.name = "Not Found Error";
  }
}

export class ServerError extends Error {
  constructor(errorMessage?: string) {
    super(errorMessage || "Temp message");
    this.name = "Server Error";
  }
}
