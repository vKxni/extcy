/**
 * Splits an array into chunks based on a predicate function.
 *
 * @param {T[]} list - The array to be chunked.
 * @param {(prev: T | undefined, current: T) => boolean} predicate - The predicate function used to determine chunk boundaries.
 * @returns {T[][]} - An array of chunks.
 */
export function chunkBy<T>(
  list: T[],
  predicate: (prev: T | undefined, current: T) => boolean
): T[][] {
  return list.reduce(
    (acc: T[][], current: T) => {
      const lastChunk = acc[acc.length - 1];
      if (predicate(lastChunk[lastChunk.length - 1], current)) {
        lastChunk.push(current);
      } else {
        acc.push([current]);
      }
      return acc;
    },
    [[]]
  );
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//   chunkBy(list, (prev, current) => current - (prev || current) === 1)
// ); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
