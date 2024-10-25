export type ParseNameData<T extends object> = {
  [K in keyof T]: T[K] extends (...arg: infer P) => unknown
    ? P extends []
      ? {
          name: K;
        }
      : {
          name: K;
          data: Parameters<T[K]>[0];
        }
    : never;
}[keyof T];
