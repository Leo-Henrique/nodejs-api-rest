export abstract class DomainError extends Error {
  public abstract error: string;
  public abstract HTTPStatusCode: number;

  constructor(public message: string) {
    super(message);
  }
}
