export function uniq<T>(list: T[]): T[] {
  return [...new Set(list)];
}

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = uniq(numbers);
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]