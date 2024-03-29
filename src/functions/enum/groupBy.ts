/**
 * Groups elements of an array into an object based on a key returned by a key function.
 *
 * @param {T[]} list - The array to be grouped.
 * @param {(item: T) => K} fn - The key function used to determine the grouping key.
 * @param {Record<K, T[]>} initial - The initial object for grouping.
 * @returns {Record<K, T[]>} - The grouped object.
 */
export function groupBy<T, K extends string | number | symbol>(
	list: T[],
	fn: (item: T) => K,
	initial?: Record<K, T[]>,
): Record<K, T[]> {
	return list.reduce((acc, item) => {
		const key = fn(item);
		if (!(key in acc)) acc[key] = [];

		acc[key].push(item);
		return acc;
	}, initial || ({} as Record<K, T[]>));
}

// const list = [1, 2, 3, 4, 5];
// const result = groupBy(list, (x) => (x % 2 === 0 ? "even" : "odd")); // { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }
// console.log(result);
