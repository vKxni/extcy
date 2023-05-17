/**
 * Drops elements from the beginning of an array until the condition is no longer satisfied and returns a new array without those elements.
 *
 * @param {T[]} list - The array from which elements will be dropped.
 * @param {(item: T) => boolean} condition - The condition function used to determine when to stop dropping elements.
 * @returns {T[]} - The updated array without dropped elements.
 */
export function dropWhile<T>(list: T[], condition: (item: T) => boolean): T[] {
  let dropIndex = 0;
  for (const [index, item] of list.entries()) {
    if (!condition(item)) {
      dropIndex = index;
      break;
    }
  }
  return list.slice(dropIndex);
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = dropWhile(numbers, (num) => num <= 5);
// console.log(result); // [6, 7, 8, 9, 10]
