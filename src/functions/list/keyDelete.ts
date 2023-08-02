type KeyValueType<T, K extends string = string> = {
	key: K;
	value: T;
};

/**
 * Deletes items from a list of objects based on a specific key value.
 *
 * @param {KeyValueType<T, K>[]} list - The list of objects.
 * @param {K} key - The key to match against.
 * @returns {{ key: string; value: T }[]} - The filtered list of objects.
 */
export function keyDelete<T, K extends string>(
	list: KeyValueType<T, K>[], key: K,
): KeyValueType<T, K>[] {
	return list.filter((item) => item.key !== key);
}

// const data = [
//     { key: "a", value: 1 },
//     { key: "b", value: 2 },
//     { key: "c", value: 3 },
//     { key: "d", value: 4 },
// ];

// const filtered = keyDelete(data, "b");
// console.log(filtered); // [{ key: 'a', value: 1 }, { key: 'c', value: 3 }, { key: 'd', value: 4 }]
