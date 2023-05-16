export function flatMapReduce<T, U>(
  list: T[],
  mapper: (value: T) => U[],
  reducer: (acc: U[], value: U[]) => U[]
): U[] {
  return reducer([], list.flatMap(mapper));
}

// const list = [1, 2, 3];
// const mapper = (value: number) => [value, value * 2];
// const reducer = (acc: number[], value: number[]) => acc.concat(value);
// console.log(flatMapReduce(list, mapper, reducer)); // Output: [1, 2, 2, 4, 3, 6]
