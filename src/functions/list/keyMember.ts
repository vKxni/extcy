/**
 * Checks if any object in a list has a specific key-value pair.
 *
 * @param {Record<string, any>[]} list - The list of objects.
 * @param {string} key - The key to match against.
 * @param {any} value - The value to match.
 * @returns {boolean} - True if a match is found, false otherwise.
 */
export function keyMember(
  list: Record<string, any>[],
  key: string,
  value: any
): boolean {
  return list.some((item) => item[key] === value);
}

// const data = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Alice" },
// ];

// console.log(keyMember(data, "id", 2)); // true

// console.log(keyMember(data, "name", "Bob")); // false
