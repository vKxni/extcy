/**
 * Inserts a separator element between each element of an array and returns the new array.
 *
 * @param {T[]} list - The array to insert the separator into.
 * @param {T} separator - The separator element to be inserted.
 * @returns {T[]} - The updated array with the separator inserted.
 */
export function introsperse<T>(list: T[], separator: T): T[] {
  return list.reduce((acc, cur, index) => {
    if (index !== 0) {
      acc.push(separator);
    }
    acc.push(cur);
    return acc;
  }, [] as T[]);
}

// const list = [1, 2, 3];
// const result = introsperse(list, 0);
// console.log(result); // [1, 0, 2, 0, 3]

// const words = ["apple", "banana", "orange"];
// const result2 = introsperse(words, "-");
// console.log(result2); // ["apple", "-", "banana", "-", "orange"]
