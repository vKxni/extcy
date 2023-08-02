/**
 * Creates a new list by concatenating the given list with itself.
 *
 * @param {T[]} list - The list to duplicate.
 * @returns {T[]} - The duplicated list.
 */
export function duplicateItems<T>(list: T[]): T[] {
	return list.concat(list);
}

// const fruits = ["apple", "banana", "orange"];
// const duplicatedFruits = duplicateItems(fruits);
// console.log(duplicatedFruits); // ['apple', 'banana', 'orange', 'apple', 'banana', 'orange']
