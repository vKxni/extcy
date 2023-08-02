/**
 * Sorts a list of objects based on a specific key.
 *
 * @param {T[]} list - The list of objects to sort.
 * @param {keyof T} key - The key to sort by.
 * @returns {T[]} - The sorted list.
 */
export function keySort<T extends Record<string, unknown>>(
	list: T[],
	key: keyof T,
): T[] {
	return list.sort((a, b) => {
		if (a[key] < b[key]) return -1;
		if (a[key] > b[key]) return 1;

		return 0;
	});
}

// const data = [
//     { id: 3, name: "Alice" },
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
// ];

// const sortedData = keySort(data, "id");
// console.log(sortedData); // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }]
