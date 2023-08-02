/**
 * Deletes all occurrences of an item from an array and returns a new array without the item.
 *
 * @param {T[]} list - The array to delete items from.
 * @param {T} item - The item to be deleted.
 * @returns {T[]} - The updated array without the item.
 */
export function deleteItem<T>(list: T[], item: T): T[] {
	return list.filter((value) => value !== item);
}

// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = deleteItem(numbers, 3);
// console.log(updatedNumbers); // Output: [1, 2, 4, 5]
