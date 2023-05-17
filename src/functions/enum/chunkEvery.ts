/**
 * Chunks an array into subarrays of a specified size.
 *
 * @param {T[]} list - The array to be chunked.
 * @param {number} n - The size of each chunk.
 * @returns {T[][]} - An array of chunks.
 */
export function chunkEvery<T>(list: T[], n: number): T[][] {
  return Array.from({ length: Math.ceil(list.length / n) }, (_, index) =>
    list.slice(index * n, (index + 1) * n)
  );
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(chunkEvery(list, 3)); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
