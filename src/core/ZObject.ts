import { ZOptional } from "./ZOptional";
import { ZType } from "./ZType";

type Clean<T> = { [K in keyof T]: T[K] };

type ZObjectInferred<T extends Record<string, ZType<any>>> = Clean<{
    [K in keyof T as T[K] extends ZOptional<any> ? never : K]: ReturnType<T[K]["parse"]>
} & {
    [K in keyof T as T[K] extends ZOptional<any> ? K : never]?: ReturnType<T[K]["parse"]>
}>

export class ZObject<T extends Record<string, ZType<any>>> extends ZType<ZObjectInferred<T>> {
    constructor(private shape: T) {
        super();
    }

    parse(value: unknown): ZObjectInferred<T> {
        if (typeof value !== "object" || value === null) {
            throw new Error("Value harus object");
        }

        const result: any = {};

        for (const key in this.shape) {
            const schema = this.shape[key];
            const fieldValue = (value as any)[key];

            result[key] = schema.parse(fieldValue);
        }

        return result;
    }
}
