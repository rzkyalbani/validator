import { ZString } from "./core/ZString.js";
import { ZNumber } from "./core/ZNumber.js";
import { ZOptional } from "./core/ZOptional.js";
import { ZObject } from "./core/ZObject.js";
import type { ZType } from "./core/ZType.js";

export const z = {
    string: () => new ZString(),
    number: () => new ZNumber(),
    optional: <T>(schema: ZType<T>) => new ZOptional(schema),
    object: <T extends Record<string, ZType<any>>>(shape: T) => new ZObject<T>(shape),
};

const ProductSchema = z.object({
  nama: z.string().min(3).max(20),
  harga: z.number().min(1000).max(5000),
  stok: z.optional(z.number().int()),
});

console.log(ProductSchema.safeParse({
  nama: "Mo",
  harga: 1500,
  stok: undefined,
}));
