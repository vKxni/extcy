/**
 * Applies a function to each element of an array, accumulating the results into a new array.
 *
 * @param {T[]} list - The array to be scanned.
 * @param {(acc: U, item: T) => U} fn - The scanning function that takes an accumulator and an array element and returns a new accumulator.
 * @param {U} initial - The initial value of the accumulator.
 * @returns {U[]} - The array of accumulated values.
 */
export function scan<T, U>(
  list: T[],
  fn: (acc: U, item: T) => U,
  initial: U
): U[] {
  return list.reduce(
    (acc, item) => {
      acc.push(fn(acc[acc.length - 1], item));
      return acc;
    },
    [initial]
  );
}

// const list = [1, 2, 3, 4, 5];
// const result = scan(list, (acc, x) => acc + x, 0);
// console.log(result); // [0, 1, 3, 6, 10, 15]
