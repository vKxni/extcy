/**
 * Updates an item at the specified index in a list with a new value.
 *
 * @param {T[]} list - The list to update the item in.
 * @param {number} index - The index of the item to update.
 * @param {T} newValue - The new value to replace the item with.
 * @returns {T[]} - The resulting list with the item updated.
 * @throws {Error} - If the index is out of bounds.
 */
export function updateAt<T>(list: T[], index: number, newValue: T): T[] {
  if (index < 0 || index >= list.length) {
    throw new Error("Index out of bounds");
  }

  const result = [...list];
  result[index] = newValue;
  return result;
}

// const list = ["apple", "banana", "cherry"];
// const updated = updateAt(list, 1, "orange");
// console.log(updated); // ['apple', 'orange', 'cherry']
