export function reverseSlice<T>(array: T[], start: number, end: number): T[] {
  return array.slice(start, end + 1).reverse();
}

// const array = [1, 2, 3, 4, 5];
// const result = reverseSlice(array, 1, 3);
// console.log(result); // [4, 3, 2]
