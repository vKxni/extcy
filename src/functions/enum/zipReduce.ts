/**
 * Reduces two arrays into a single value by applying a function to each pair of corresponding elements.
 *
 * @param {T[]} arr1 - The first array to zip.
 * @param {U[]} arr2 - The second array to zip.
 * @param {V} initialAccumulator - The initial value of the accumulator.
 * @param {(accumulator: V, a: T, b: U) => V} fn - The function to apply to each pair of corresponding elements.
 * @returns {V} - The final value of the accumulator.
 */
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
