/**
 * Checks if unknown object in a list has a specific key-value pair.
 *
 * @param {T[]} list - The list of objects.
 * @param {keyof T} key - The key to match against.
 * @param {unknown} value - The value to match.
 * @returns {boolean} - True if a match is found, false otherwise.
 */
export function keyMember<T extends Record<string, unknown>>(
	list: T[],
	key: keyof T,
	value: unknown,
): boolean {
	return list.some((item) => item[key] === value);
}

// const data = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Alice" },
// ];

// console.log(keyMember(data, "id", 2)); // true

// console.log(keyMember(data, "name", "Bob")); // false
