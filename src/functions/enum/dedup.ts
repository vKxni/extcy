/**
 * Removes duplicate elements from an array and returns a new array with unique elements.
 *
 * @param {T[]} list - The array to be deduplicated.
 * @returns {T[]} - The deduplicated array.
 */
export function dedup<T>(list: T[]): T[] {
	return [...new Set(list)];
}

// const inputList = [1, 2, 3, 2, 4, 1, 5];
// const deduplicatedList = dedup(inputList);
// console.log(deduplicatedList); // Output: [1, 2, 3, 4, 5]
