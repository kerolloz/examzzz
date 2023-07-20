// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = object> = new (...args: any[]) => T;
export type Mixin<X extends Constructor, Y> = X & Constructor<Y>;
