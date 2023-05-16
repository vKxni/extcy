export function dropEvery<T>(list: T[], n: number): T[] {
  return list.filter((_, index) => (index + 1) % n !== 0);
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(dropEvery(list, 3)); // Output: [1, 2, 4, 5, 7, 8]
