/**
 * Retrieves the value associated with the specified key from a map and removes the entry from the map.
 * If the key does not exist, a default value is provided.
 *
 * @param {Map<K, V>} map - The map.
 * @param {K} key - The key to retrieve and remove.
 * @param {() => V} defaultValue - The function to provide the default value.
 * @returns {V} - The value associated with the key or the default value.
 */
export function popLazy<K, V>(
	map: Map<K, V>, key: K,
	defaultValue: () => V,
): V {
	if (map.has(key)) {
		const value = map.get(key)!;
		map.delete(key);

		return value;
	}

	return defaultValue();
}

// const map = new Map<string, number>([
//     ["a", 1],
//     ["b", 2],
// ]);

// const value = popLazy(map, "a", () => 0);
// console.log(value); // 1

// const nonExistentValue = popLazy(map, "c", () => 0);
// console.log(nonExistentValue); // 0
