/**
 * Finds the first value in a map that satisfies the provided predicate function.
 *
 * @param {Map<TKey, TValue>} map - The map to search for the value.
 * @param {(value: TValue) => boolean} predicate - The predicate function used to determine the search condition.
 * @returns {TValue | undefined} - The found value, or undefined if no value is found.
 */
export function findValue<TKey, TValue>(
  map: Map<TKey, TValue>,
  predicate: (value: TValue) => boolean
): TValue | undefined {
  const keys = Array.from(map.keys());
  const length = keys.length;

  for (let i = 0; i < length; i++) {
    const key = keys[i];
    const value = map.get(key);
    if (value !== undefined && predicate(value)) {
      return value;
    }
  }

  return undefined;
}

// const fruitMap = new Map([
//   ["apple", "red"],
//   ["banana", "yellow"],
//   ["orange", "orange"],
// ]);

// const value = findValue(fruitMap, (color) => color === "yellow");
// console.log(value); // yellow
