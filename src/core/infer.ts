import type { ZType } from "./ZType";

export type Infer<T> = T extends ZType<infer U> ? U : never;
