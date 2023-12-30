import { describe, expect, it } from "vitest";
import { ExampleUseCase } from "./example.useCase";

describe("Example Use Case", () => {
  it("should be able to return false when the argument is false", () => {
    const exampleUseCase = new ExampleUseCase();
    const sut = exampleUseCase.execute(false);

    expect(sut).toBeFalsy();
  });

  it("should be able to return true when the argument is true", () => {
    const exampleUseCase = new ExampleUseCase();
    const sut = exampleUseCase.execute(true);

    expect(sut).toBeTruthy();
  });
});
