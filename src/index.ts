import { ZString } from "./core/ZString.js";
import { ZNumber } from "./core/ZNumber.js";

export const z = {
    string: () => new ZString(),
    number: () => new ZNumber(),
};


console.log(
  z.string().min(3).safeParse("Albani")
);

console.log(
  z.number().min(10).safeParse(5)
);
