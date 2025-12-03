import { ZType } from "./ZType";

export class ZOptional<T> extends ZType<T | undefined> {
    constructor(private inner: ZType<T>) {
        super();
    }

    parse(value: unknown): T | undefined {
        if (value === undefined) return undefined;
        return this.inner.parse(value);
    }
}
