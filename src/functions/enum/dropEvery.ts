/**
 * Drops every nth element from an array and returns a new array without those elements.
 *
 * @param {T[]} list - The array from which elements will be dropped.
 * @param {number} n - The interval at which elements will be dropped.
 * @returns {T[]} - The updated array without dropped elements.
 */
export function dropEvery<T>(list: T[], n: number): T[] {
	return list.filter((_, index) => (index + 1) % n !== 0);
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(dropEvery(list, 3)); // Output: [1, 2, 4, 5, 7, 8]
