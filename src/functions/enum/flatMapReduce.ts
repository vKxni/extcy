/**
 * Applies a mapper function to each element in an array, flattens the resulting arrays, and reduces them into a single value using a reducer function.
 *
 * @param {T[]} list - The array to be mapped, flattened, and reduced.
 * @param {(value: T) => U[]} mapper - The mapper function to be applied to each element.
 * @param {(acc: U[], value: U[]) => U[]} reducer - The reducer function used to reduce the flattened arrays into a single value.
 * @returns {U[]} - The result of the mapping, flattening, and reduction.
 */
export function flatMapReduce<T, U>(
	list: T[],
	mapper: (value: T) => U[],
	reducer: (acc: U[], value: U[]) => U[],
): U[] {
	return reducer([], list.flatMap(mapper));
}

// const list = [1, 2, 3];
// const mapper = (value: number) => [value, value * 2];
// const reducer = (acc: number[], value: number[]) => acc.concat(value);
// console.log(flatMapReduce(list, mapper, reducer)); // Output: [1, 2, 2, 4, 3, 6]
