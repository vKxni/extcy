/**
 * Retrieves an array of values from a map.
 *
 * @param {Map<K, V>} map - The map.
 * @returns {V[]} - The array of values.
 */
export function mapValues<K, V>(map: Map<K, V>): V[] {
  return Array.from(map.values());
}

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// const values = mapValues(map);

// console.log(values); // [1, 2]
