/**
 * Finds the index of the first element in a collection that satisfies the provided predicate function.
 *
 * @param {T[]} collection - The collection to search for the element.
 * @param {(item: T) => boolean} predicate - The predicate function used to determine the search condition.
 * @returns {number | undefined} - The index of the found element, or undefined if no element is found.
 */
export function findIndex<T>(
	collection: T[],
	predicate: (item: T) => boolean,
): number | undefined {
	for (let i = 0; i < collection.length; i++) {
		if (predicate(collection[i])) {
			return i;
		}
	}

	return undefined;
}

// const numbers = [10, 20, 30, 40];
// const index = findIndex(numbers, (num) => num > 25);
// console.log(index); // 2
