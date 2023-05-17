/**
 * Adds an element to the end of an array and returns the new array.
 *
 * @param {T[]} collection - The array to add the element to.
 * @param {T} element - The element to be added.
 * @returns {T[]} - The updated array with the element added.
 */
export function into<T>(collection: T[], element: T): T[] {
  return [...collection, element];
}

/**
 * Adds an element to a specific index of an array and returns the new array.
 *
 * @param {T[]} collection - The array to add the element to.
 * @param {T} element - The element to be added.
 * @param {number} index - The index at which the element should be inserted.
 * @returns {T[]} - The updated array with the element inserted.
 */
export function intoCollection<T>(
  collection: T[],
  element: T,
  index: number
): T[] {
  return [...collection.slice(0, index), element, ...collection.slice(index)];
}

// console.log(into([1, 2, 3, 4], 5)); // Output: [1, 2, 3, 4, 5]

// console.log(intoCollection([1, 2, 3, 4], 5, 1)); // Output: [1, 5, 2, 3, 4]
