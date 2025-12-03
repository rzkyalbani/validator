import { ZType } from "./ZType.js";

export class ZString extends ZType<string> {
    private _min?: number;
    private _max?: number;
    private _regex?: RegExp;

    min(n: number): this {
        this._min = n;
        return this;
    }

    max(n: number): this {
        this._max = n;
        return this;
    }

    regex(pattern: RegExp): this {
        this._regex = pattern;
        return this;
    }

    parse(value: unknown): string {
        if (typeof value !== "string") {
            throw new Error("Value harus string");
        }

        if (this._min !== undefined && value.length < this._min) {
            throw new Error(`Minimal panjang ${this._min}`);
        }

        if (this._max !== undefined && value.length > this._max) {
            throw new Error(`Maksimal panjang ${this._max}`);
        }

        if (this._regex && !this._regex.test(value)) {
            throw new Error(`String tidak cocok dengan pola regex`);
        }

        return value;
    }
}
