/**
 * Counts the number of items in an array until a condition is met.
 *
 * @param {T[]} list - The array to be counted.
 * @param {(item: T) => boolean} condition - The condition function used to determine when to stop counting.
 * @returns {number} - The count of items until the condition is met.
 */
export function countUntil<T>(
  list: T[],
  condition: (item: T) => boolean
): number {
  let count: number = 0;
  const length = list.length;

  for (let i = 0; i < length; i++) {
    if (condition(list[i])) {
      break;
    }
    count++;
  }

  return count;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const count = countUntil(numbers, (num) => num > 5);
// console.log(count); // 5
