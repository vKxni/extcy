/**
 * Maps each element of an array using a mapper function and reduces the mapped values into a single result using a reducer function.
 *
 * @param {T[]} array - The array to be mapped and reduced.
 * @param {(item: T) => U} mapper - The mapper function to be applied to each element.
 * @param {(acc: R, mapped: U) => R} reducer - The reducer function used to reduce the mapped values into a single result.
 * @param {R} initial - The initial value for the reduction.
 * @returns {R} - The result of the mapping and reduction.
 */
export function mapReduce<T, U, R>(
	array: T[],
	mapper: (item: T) => U,
	reducer: (acc: R, mapped: U) => R,
	initial: R,
): R {
	return array.map(mapper).reduce(reducer, initial);
}

// const array = [1, 2, 3, 4, 5];
// const result = mapReduce(
//     array,
//     (num) => num * num,
//     (acc, squared) => acc + squared,
//     0
// );
// console.log(result); // 55
