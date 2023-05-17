/**
 * Finds the minimum and maximum values in an array based on a selector function and a custom comparer function.
 *
 * @param {T[]} array - The array to search for the minimum and maximum values.
 * @param {(item: T) => R} selector - The selector function used to extract the value for comparison.
 * @param {(a: R, b: R) => number} comparer - The custom comparer function used to compare the values.
 * @returns {[T | undefined, T | undefined]} - A tuple containing the minimum and maximum values, or undefined if the array is empty.
 */
export function minMaxBy<T, R>(
  array: T[],
  selector: (item: T) => R,
  comparer: (a: R, b: R) => number
): [T | undefined, T | undefined] {
  if (array.length === 0) {
    return [undefined, undefined];
  }

  let min = array[0];
  let max = array[0];

  array.forEach((item) => {
    if (comparer(selector(item), selector(min)) < 0) {
      min = item;
    }
    if (comparer(selector(item), selector(max)) > 0) {
      max = item;
    }
  });

  return [min, max];
}

// const array = [5, 2, 8, 1, 4];
// const [min, max] = minMaxBy(
//   array,
//   (num) => num,
//   (a, b) => a - b
// );
// console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 8
