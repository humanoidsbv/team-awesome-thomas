export class NotFoundError extends Error {
  constructor(message?: string) {
    super(message || "Temp message");
    this.name = "Not Found Error";
  }
}

export class ServerError extends Error {
  constructor(message?: string) {
    super(message || "Temp message");
    this.name = "Server Error";
  }
}
