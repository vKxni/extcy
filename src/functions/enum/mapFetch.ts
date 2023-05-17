/**
 * Retrieves the value associated with the specified key from a map.
 *
 * @param {Map<TKey, TValue>} map - The map to fetch the value from.
 * @param {TKey} key - The key associated with the value.
 * @returns {TValue | undefined} - The fetched value, or undefined if the key is not found.
 */
export function mapFetch<TKey, TValue>(
  map: Map<TKey, TValue>,
  key: TKey
): TValue | undefined {
  return map.get(key);
}

// const fruitMap = new Map([
//     ['apple', 'red'],
//     ['banana', 'yellow'],
//     ['orange', 'orange'],
//   ]);

//  console.log(mapFetch(fruitMap, 'apple')); // red
//  console.log(mapFetch(fruitMap, 'grape')); // undefined
