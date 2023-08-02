/**
 * Converts a struct-like object to a regular object where the keys are of type keyof T and the values are of type unknown.
 *
 * @param {T extends Record<string, unknown>} struct - The struct-like object.
 * @returns {Record<keyof T, unknown>} - The regular object.
 */
export function fromStruct<T extends Record<string, unknown>>(
	struct: T,
): Record<keyof T, unknown> {
	return Object.fromEntries(Object.entries(struct)) as Record<keyof T, unknown>;
}

// const myStruct = { field1: "value1", field2: 42 };
// const myMap = fromStruct(myStruct);
// console.log(myMap); // { field1: 'value1', field2: 42 }
