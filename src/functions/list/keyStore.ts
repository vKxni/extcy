type KeyValueTuple<T, K> = [T, K];

/**
 * Transforms a list of items into an array of key-value tuples where the value is set to a default value for items with a specific key.
 *
 * @param {T[]} list - The list of items.
 * @param {K} key - The key to match against.
 * @param {unknown} defaultValue - The default value for items with the matching key.
 * @param {(item: T) => K} extractor - The function to extract the key from each item.
 * @returns {KeyValueTuple<T, K>[]} - The array of key-value tuples.
 */
export function keyStore<T, K>(
	list: T[], key: K,
	defaultValue: K | null,
	extractor: (item: T) => K,
): KeyValueTuple<T, K | null>[] {
	return list.map((item) => [
		item, extractor(item) === key ? null : defaultValue,
	]);
}

// interface Person {
//     id: number;
//     name: string;
// }

// const people: Person[] = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
// ];

// const result = keyStore(people, "name", "Unknown", (person) => person.name);
// console.log(result); // [[ { id: 1, name: 'Alice' }, 'Unknown' ], [ { id: 2, name: 'Bob' }, 'Unknown' ], [ { id: 3, name: 'Charlie' }, 'Unknown' ]]
