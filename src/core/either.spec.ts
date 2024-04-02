import { describe, expect, it } from "vitest";
import { DomainError } from "./domain-error";
import {
  Either,
  ExtractError,
  ExtractSuccess,
  Left,
  Right,
  left,
  right,
} from "./either";

class FakeError extends DomainError {
  public HTTPStatusCode = 0;
  public error = "FakeError";

  constructor() {
    super("Fake error.");
  }
}

type DoSomethingResponse = Either<FakeError, Record<string, string>>;

function doSomething(success: boolean): DoSomethingResponse {
  return !success ? left(new FakeError()) : right({});
}

describe("[Either] Functional Error Handling", () => {
  it("should be able to return error on left flow", () => {
    const result = doSomething(false) as ExtractError<DoSomethingResponse>;

    expect(result).toBeInstanceOf(Left);
    expect(result.isLeft()).toBeTruthy();

    if (result.isLeft()) expect(result.reason).instanceOf(FakeError);
  });

  it("should be able to return success on right flow", () => {
    const result = doSomething(true) as ExtractSuccess<DoSomethingResponse>;

    expect(result).toBeInstanceOf(Right);
    expect(result.isRight()).toBeTruthy();
    expect(result.result).toEqual({});
  });
});
