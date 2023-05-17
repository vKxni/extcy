/**
 * Applies a function to each pair of corresponding elements from two arrays and returns a new array of the results.
 *
 * @param {T[]} arr1 - The first array to zip.
 * @param {U[]} arr2 - The second array to zip.
 * @param {(a: T, b: U) => V} fn - The function to apply to each pair of corresponding elements.
 * @returns {V[]} - The array of results.
 */
export function zipWith<T, U, V>(
  arr1: T[],
  arr2: U[],
  fn: (a: T, b: U) => V
): V[] {
  const length = Math.min(arr1.length, arr2.length);
  const result: V[] = [];

  for (let i = 0; i < length; i++) {
    result.push(fn(arr1[i], arr2[i]));
  }

  return result;
}

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = zipWith(arr1, arr2, (a, b) => a + b);
// console.log(result); // [5, 7, 9]
