import { ZType } from "./ZType.js";

export class ZNumber extends ZType<number> {
    private _min?: number;

    min(n: number): this {
        this._min = n;
        return this;
    }

    parse(value: unknown): number {
        if (typeof value !== "number") {
            throw new Error("Value harus number");
        }

        if (this._min !== undefined && value < this._min) {
            throw new Error(`Minimal nilai ${this._min}`);
        }

        return value;
    }
}
