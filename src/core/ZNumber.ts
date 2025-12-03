import { ZType } from "./ZType.js";

export class ZNumber extends ZType<number> {
    private _min?: number;
    private _max?: number;
    private _int?: boolean = false;

    min(n: number): this {
        this._min = n;
        return this;
    }

    max(n: number): this {
        this._max = n;
        return this;
    }

    int(): this {
        this._int = true;
        return this;
    }

    parse(value: unknown): number {
        if (typeof value !== "number") {
            throw new Error("Value harus number");
        }

        if (this._min !== undefined && value < this._min) {
            throw new Error(`Minimal nilai ${this._min}`);
        }

        if (this._max !== undefined && value > this._max) {
            throw new Error(`Maksimal nilai ${this._max}`);
        }

        if (this._int && !Number.isInteger(value)) {
            throw new Error("Harus bilangan bulat (integer)");
        }

        return value;
    }
}
