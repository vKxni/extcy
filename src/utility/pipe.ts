type PipeFunction<T, U> = (input: T) => U;

export function pipe<T, U>(
  ...fns: PipeFunction<any, any>[]
): PipeFunction<T, U> {
  return (input: T): U => {
    let result = input;
    for (const fn of fns) {
      result = fn(result);
    }
    return result as unknown as U;
  };
}
