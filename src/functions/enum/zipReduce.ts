export function zipReduce<T, U, V>(
  arr1: T[],
  arr2: U[],
  initialAccumulator: V,
  fn: (accumulator: V, a: T, b: U) => V
): V {
  const length = Math.min(arr1.length, arr2.length);
  let accumulator = initialAccumulator;

  for (let i = 0; i < length; i++) {
    accumulator = fn(accumulator, arr1[i], arr2[i]);
  }

  return accumulator;
}

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = zipReduce(arr1, arr2, 0, (acc, a, b) => acc + a * b);
// console.log(result); //  32
