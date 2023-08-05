/**
 * Applies the provided callback function to each key-value pair in the input object and returns a new object
 * with the results as the values corresponding to the original keys.
 *
 * @param obj The input object.
 * @param callback The callback function to be applied to each key-value pair in the input object.
 * @returns A new object with the results of applying the callback function to each key-value pair.
 *
    ```ts
const inputMap: Record<string, number> = { "a": 1, "b": 2 };
const outputMap: Record<string, number> = mapObjectValues(inputMap, (k, v) => v * 2);
console.log(outputMap); // { a: 2, b: 4 }
```
 */
export function mapObjectValues<K extends string, V, R>(
	obj: Record<K, V>,
	callback: (key: K, value: V) => R,
): Record<K, R> {
	const result: Partial<Record<K, R>> = {}; // Partial to initialize an empty object
	const entries = Object.entries(obj);

	for (let i = 0; i < entries.length; i++) {
		const [key, value] = entries[i];
		if (typeof value !== 'undefined') {
			result[key as K] = callback(key as K, value as V);
		}
	}

	return result as Record<K, R>;
}

// const inputMap: Record<string, number> = { "a": 1, "b": 2 };
// const outputMap: Record<string, number> = mapObjectValues(inputMap, (k, v) => v * 2);
// console.log(outputMap); // { a: 2, b: 4 }
