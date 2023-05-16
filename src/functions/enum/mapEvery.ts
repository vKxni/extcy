export function mapEvery<T>(
  list: T[],
  n: number,
  callback: (item: T) => T
): T[] {
  return list.map((item, index) => {
    if ((index + 1) % n === 0) {
      return callback(item);
    } else {
      return item;
    }
  });
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = mapEvery(list, 3, (x) => x * 2);
// console.log(result); // [1, 2, 6, 4, 5, 12, 7, 8, 18]
