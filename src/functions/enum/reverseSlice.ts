/**
 * Creates a new array by reversing a section of an existing array.
 *
 * @param {T[]} array - The array to be reversed and sliced.
 * @param {number} start - The index at which to start the slice (inclusive).
 * @param {number} end - The index at which to end the slice (inclusive).
 * @returns {T[]} - The reversed and sliced section of the array.
 */
export function reverseSlice<T>(array: T[], start: number, end: number): T[] {
	return array.slice(start, end + 1).reverse();
}

// const array = [1, 2, 3, 4, 5];
// const result = reverseSlice(array, 1, 3);
// console.log(result); // [4, 3, 2]
