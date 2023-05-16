export function findIndex<T>(
  collection: T[],
  predicate: (item: T) => boolean
): number | undefined {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return i;
    }
  }
  return undefined;
}

// const numbers = [10, 20, 30, 40];
// const index = findIndex(numbers, (num) => num > 25);
// console.log(index); // 2