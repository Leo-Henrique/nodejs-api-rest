import { UniqueEntityId } from "@/core/unique-entity-id";
import { CamelCase, ReadonlyKeysOf } from "type-fest";
import { z } from "zod";

export class Entity {}

type GetEntityFieldName<T> = T extends `define${infer F}`
  ? CamelCase<F>
  : never;

type EntityData<T extends Record<keyof T, () => z.ZodType>> = {
  [K in keyof T as GetEntityFieldName<K>]: ReturnType<T[K]>;
};


type A = z.infer<z.ZodObject<EntityData<User>>>




const a = z.object({
  id: z.instanceof(UniqueEntityId).readonly(),
  name: z.string().min(1).max(255),
  email: z.string().email(),
});

type AB = z.infer<typeof a>

export class User extends Entity {
  static create() {}

  defineId() {
    return z
      .instanceof(UniqueEntityId)
      .default(new UniqueEntityId())
      .readonly();
  }

  defineName() {
    return z.string().min(1).max(255).readonly();
  }

  defineEmail() {
    return z.string().email();
  }
}
