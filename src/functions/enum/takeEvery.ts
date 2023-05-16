export function takeEvery<T>(list: T[], step: number): T[] {
  return list.filter((_, i) => i % step === 0);
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = takeEvery(list, 2);
// console.log(result); // [1, 3, 5, 7, 9]
