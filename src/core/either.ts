import { BaseError } from "./error";

export type Either<Reason, Result> = Left<Reason> | Right<Result>;

export type ExtractError<Either> = Either extends Left<infer L>
  ? Left<L>
  : never;

export type ExtractSuccess<Either> = Either extends Right<infer R>
  ? Right<R>
  : never;

export class Left<Reason> {
  constructor(public readonly reason: Reason) {}

  isLeft(): this is Left<Reason> {
    return true;
  }

  isRight(): this is Right<never> {
    return false;
  }
}

export class Right<Result> {
  constructor(public readonly result: Result) {}

  isLeft(): this is Left<never> {
    return false;
  }

  isRight(): this is Right<Result> {
    return true;
  }
}

export const left = <Reason extends BaseError>(
  reason: Reason,
): Left<Reason> => {
  return new Left<Reason>(reason);
};

export const right = <Result extends object>(result: Result): Right<Result> => {
  return new Right<Result>(result);
};
