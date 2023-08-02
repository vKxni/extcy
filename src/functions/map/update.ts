type MapType<T> = {
    [key: string]: T;
};

/**
 * Updates the value associated with the specified key in a map by applying a transformation function to it.
 *
 * @param {MapType<V>} map - The map.
 * @param {K} key - The key to update.
 * @param {(value: V | undefined) => V} transform - The transformation function to apply to the value.
 * @returns {MapType<V>} - The updated map.
 */
export function update<K extends string, V>(
	map: MapType<V>, key: K,
	transform: (value: V | undefined) => V,
): MapType<V> {
	const currentValue = map[key];
	const transformedValue = transform(currentValue);

	if (currentValue === transformedValue) return map;

	return {
		...map,
		[key]: transformedValue,
	};
}

// const emptyMap = {};
// const updatedMap = update(emptyMap, "key", () => "value");
// console.log(updatedMap); // { key: 'value' }
