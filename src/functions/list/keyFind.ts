/**
 * Finds the first item in a list of objects that matches a specific key value.
 *
 * @param {{ key: string; value: T }[]} list - The list of objects.
 * @param {string} key - The key to match against.
 * @returns {{ key: string; value: T } | undefined} - The matching object or undefined if no match is found.
 */
export function keyFind<T>(
	list: { key: string; value: T }[],
	key: string,
): { key: string; value: T } | undefined {
	return list.find((item) => item.key === key);
}

// const data = [
//     { key: "a", value: 1 },
//     { key: "b", value: 2 },
//     { key: "c", value: 3 },
//     { key: "d", value: 4 },
// ];

// const found = keyFind(data, "c");
// console.log(found);
// // { key: 'c', value: 3 }

// const notFound = keyFind(data, "e");
// console.log(notFound); // undefined
