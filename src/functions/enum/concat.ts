/**
 * Concatenates multiple arrays into a single array.
 *
 * @param {T[][]} lists - Arrays to be concatenated.
 * @returns {T[]} - The concatenated array.
 */
export function concat<T>(lists: T[][]): T[] {
  return ([] as T[]).concat(...lists);
}

/**
 * Concatenates two arrays into a single array.
 *
 * @param {T[]} list1 - The first array.
 * @param {T[]} list2 - The second array.
 * @returns {T[]} - The concatenated array.
 */
export function concatLists<T>(list1: T[], list2: T[]): T[] {
  return list1.concat(list2);
}

// console.log(
//     concat([
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ])
//   ); // Output: [1, 2, 3, 4, 5, 6]

//   console.log(concatLists([1, [2], 3], [4, 5, 6])); // [ 1, [ 2 ], 3, 4, 5, 6 ]
