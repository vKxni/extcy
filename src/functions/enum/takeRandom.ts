/**
 * Takes a random sample of elements from an array and returns a new array.
 *
 * @param {number} n - The number of elements to take.
 * @param {T[]} list - The array to take elements from.
 * @returns {T[]} - The new array with a random sample of elements.
 */
export function takeRandom<T>(n: number, list: T[]): T[] {
	const shuffled = list.slice();
	let i = list.length, index, temp;

	while (i--) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];

		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}

	return shuffled.slice(0, n);
}

// const numbers = [1, 2, 3, 4, 5];
// const randomNumbers = takeRandom(3, numbers);
// console.log(randomNumbers); // random three numbers [?, ?, ?]
