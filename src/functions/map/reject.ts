/**
 * Filters an array based on a predicate function and returns a new array containing the rejected items.
 *
 * @param {T[]} array - The array to filter.
 * @param {(item: T) => boolean} predicate - The predicate function.
 * @returns {T[]} - The array of rejected items.
 */
export function reject<T>(array: T[], predicate: (item: T) => boolean): T[] {
  let rejectedItems: T[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!predicate(item)) {
      rejectedItems.push(item);
    }
  }

  return rejectedItems;
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = reject(numbers, (num) => num % 2 === 0);
// console.log(oddNumbers); // [1, 3, 5, 7, 9]
