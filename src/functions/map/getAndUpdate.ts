/**
 * Retrieves the value associated with the specified key from a map, applies an update function to it, and sets the updated value back into the map.
 * If the key does not exist, a new entry is created with the updated value.
 *
 * @param {Map<K, V>} map - The map.
 * @param {K} key - The key to retrieve and update.
 * @param {(value: V | undefined) => V} updateFn - The update function to apply to the value.
 * @returns {V} - The updated value.
 */
export function getAndUpdate<K, V>(
	map: Map<K, V>, key: K,
	updateFn: (value: V | undefined) => V,
): V {
	const oldValue = map.get(key);
	const newValue = updateFn(oldValue);

	map.set(key, newValue);

	return newValue;
}

// const myMap = new Map<string, number>();
// const updatedValue = getAndUpdate(myMap, "key1", (oldValue) => (oldValue ?? 0) + 1);
// console.log(updatedValue); // 1
// console.log(myMap); // Map { 'key1' => 1 }
