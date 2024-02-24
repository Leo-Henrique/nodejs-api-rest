import { beforeEach, describe, expect, it } from "vitest";
import { ExampleUseCase } from "./example.use-case";

let sut: ExampleUseCase;

describe("Example Use Case", () => {
  beforeEach(() => {
    sut = new ExampleUseCase();
  });

  it("should be able to return false when the argument is false", () => {
    const result = sut.execute(false);

    expect(result).toBeFalsy();
  });

  it("should be able to return true when the argument is true", () => {
    const result = sut.execute(true);

    expect(result).toBeTruthy();
  });
});
