export function mapReduce<T, U, R>(
  array: T[],
  mapper: (item: T) => U,
  reducer: (acc: R, mapped: U) => R,
  initial: R
): R {
  return array.map(mapper).reduce(reducer, initial);
}

// const array = [1, 2, 3, 4, 5];
// const result = mapReduce(
//   array,
//   (num) => num * num,
//   (acc, squared) => acc + squared,
//   0
// );
// console.log(result); // 55 
