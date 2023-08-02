/**
 * Unzips an array of tuples into separate arrays for each element position.
 *
 * @param {T[]} list - The array of tuples to be unzipped.
 * @returns {{ [K in keyof T]: T[K][] }} - An object containing arrays for each element position.
 */
export function unzip<T extends unknown[]>(list: T[]): { [K in keyof T]: T[K][] } {
	const result: { [K in keyof T]: T[K][] } = [] as { [K in keyof T]: T[K][] };

	for (const tuple of list) {
		tuple.forEach((value, index) => {
			if (!result[index]) {
				result[index] = [];
			}
			result[index].push(value);
		});
	}

	return result;
}

// const tuples: (string | number)[][] = [
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
// ];
// const [letters, numbers] = unzip(tuples);
// console.log(letters); // Output: ['a', 'b', 'c']
// console.log(numbers); // Output: [1, 2, 3]
