type PredicateFunction<T> = (a: T, b: T) => boolean;

export function chunkWhile<T>(
  list: T[],
  predicate: PredicateFunction<T>
): T[][] {
  const chunks: T[][] = [];
  let currentChunk: T[] = [];

  for (let i = 0; i < list.length; i++) {
    const currentItem = list[i];
    const previousItem = i > 0 ? list[i - 1] : undefined;

    if (previousItem === undefined || predicate(previousItem, currentItem)) {
      currentChunk.push(currentItem);
    } else {
      chunks.push(currentChunk);
      currentChunk = [currentItem];
    }
  }

  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }

  return chunks;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenChunks = chunkWhile(numbers, (a, b) => a % 2 === 0 && b % 2 === 0);
// console.log(evenChunks);
// // [[2], [4], [6], [8], [10]]

// const oddChunks = chunkWhile(numbers, (a, b) => a % 2 !== 0 && b % 2 !== 0);
// console.log(oddChunks);
// // [[1], [3], [5], [7], [9], [10]] (last sublist includes 10 as it breaks the sequence of odd numbers)
