export function countUntil<T>(
  list: T[],
  condition: (item: T) => boolean
): number {
  let count = 0;
  for (const item of list) {
    if (condition(item)) {
      break;
    }
    count++;
  }
  return count;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const count = countUntil(numbers, (num) => num > 5);
// console.log(count); // 5
