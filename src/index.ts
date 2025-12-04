import { ZString } from "./core/ZString.js";
import { ZNumber } from "./core/ZNumber.js";
import { ZOptional } from "./core/ZOptional.js";
import { ZObject } from "./core/ZObject.js";
import { ZType } from "./core/ZType.js";
import { Infer } from "./core/infer.js";

export const z = {
    string: () => new ZString(),
    number: () => new ZNumber(),
    optional: <T>(schema: ZType<T>) => new ZOptional(schema),
    object: <T extends Record<string, ZType<any>>>(shape: T) => new ZObject<T>(shape),
};

const UserSchema = z.object({
  username: z.string().min(3),
  age: z.optional(z.number().int()),
  email: z.string().regex(/@/),
});

type User = Infer<typeof UserSchema>;

// coba hover di VSCode pasti muncul:
// type User = {
//   username: string;
//   age?: number;
//   email: string;
// }

const testUser: User = {
  username: "Albani",
  email: "a@b.com",
};

console.log(UserSchema.safeParse(testUser));
