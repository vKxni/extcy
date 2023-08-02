/**
 * Wraps a value in an array.
 *
 * @param {T} value - The value to wrap.
 * @returns {T[]} - The array containing the value.
 */
export function wrap<T>(value: T): T[] {
	return [value];
}

// const wrapped = wrap("Hello");
// console.log(wrapped); // ['Hello']
