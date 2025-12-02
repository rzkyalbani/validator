export abstract class ZType<T> {
    abstract parse(value: unknown): T;

    safeParse(value: unknown) {
        try {
            const data = this.parse(value);
            return { success: true as const, data };
        } catch (error) {
            return { success: false as const, error };
        }
    }
}
