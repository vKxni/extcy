/**
 * Takes every nth element from an array and returns a new array.
 *
 * @param {T[]} list - The array to take elements from.
 * @param {number} step - The step size for taking elements.
 * @returns {T[]} - The new array with every nth element.
 */
export function takeEvery<T>(list: T[], step: number): T[] {
  return list.filter((_, i) => i % step === 0);
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = takeEvery(list, 2);
// console.log(result); // [1, 3, 5, 7, 9]
