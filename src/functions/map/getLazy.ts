/**
 * Retrieves the value associated with the specified key from a map. If the key does not exist, a default value is created and set into the map.
 *
 * @param {Map<K, V>} map - The map.
 * @param {K} key - The key to retrieve.
 * @param {() => V} defaultValueFn - The function to create the default value.
 * @returns {V} - The value associated with the key or the default value.
 */
export function getLazy<K, V>(
	map: Map<K, V>, key: K,
	defaultValueFn: () => V,
): V {
	if (map.has(key)) {
		return map.get(key)!;
	}

	const defaultValue = defaultValueFn();
	map.set(key, defaultValue);

	return defaultValue;
}

// const myMap = new Map<string, number>();
// const value = getLazy(myMap, "key1", () => {
//     console.log("Computing default value...");
//     return 42;
// });
// console.log(value); // 42
