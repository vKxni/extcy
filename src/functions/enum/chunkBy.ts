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
