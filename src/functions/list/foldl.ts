/**
 * Applies a function to each element of a list from left to right and accumulates the results.
 *
 * @param {T[]} list - The list to iterate over.
 * @param {U} accumulator - The initial accumulator value.
 * @param {(acc: U, current: T) => U} fn - The function to apply to each element.
 * @returns {U} - The accumulated result.
 */
export function foldl<T, U>(
	list: T[], accumulator: U,
	fn: (acc: U, current: T) => U,
): U {
	let result = accumulator;
	const length = list.length;

	for (let i = 0; i < length; i++) {
		const item = list[i];
		result = fn(result, item);
	}

	return result;
}

// const numbers = [1, 2, 3, 4, 5];
// const sum = foldl(numbers, 0, (acc, current) => acc + current);
// console.log(sum); // 15

// const words = ['Hello', 'World', '!'];
// const concatenated = foldl(words, '', (acc, current) => acc + ' ' + current);
// console.log(concatenated); // ' Hello World !'
