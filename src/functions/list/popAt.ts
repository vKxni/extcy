/**
 * Removes an item at the specified index from a list.
 *
 * @param {T[]} list - The list to remove the item from.
 * @param {number} index - The index of the item to remove.
 * @returns {T[]} - The resulting list with the item removed.
 * @throws {Error} - If the index is out of bounds.
 */
export function popAt<T>(list: T[], index: number): T[] {
  if (index < 0 || index >= list.length) {
    throw new Error("Index out of bounds");
  }

  const result = [...list];
  result.splice(index, 1);
  return result;
}

// const list = [1, 2, 3, 4, 5];
// const popped = popAt(list, 2);
// console.log(popped); // [1, 2, 4, 5]
