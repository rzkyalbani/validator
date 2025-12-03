import { ZType } from "./ZType";

export class ZObject<T extends Record<string, ZType<any>>> extends ZType<{
    [K in keyof T]: ReturnType<T[K]["parse"]>;
}> {
    constructor(private shape: T) {
        super();
    }

    parse(value: unknown) {
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
