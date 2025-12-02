import { ZType } from "./ZType.js";

export class ZString extends ZType<string> {
    private _min?: number;

    min(n: number): this {
        this._min = n;
        return this;
    }

    parse(value: unknown): string {
        if (typeof value !== "string") {
            throw new Error("Value harus string");
        }

        if (this._min !== undefined && value.length < this._min) {
            throw new Error(`Minimal panjang ${this._min}`);
        }

        return value;
    }
}
