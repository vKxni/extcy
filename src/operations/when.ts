/**
 * Evaluates a value against a set of patterns and executes the corresponding callback function of the first pattern that matches the value.
 *
 * @param {T} value - The value to evaluate.
 * @param {...[(val: T) => boolean, (val: T) => R]} patterns - The patterns and corresponding callback functions to evaluate against.
 * @returns {R | undefined} - The result of the matching callback function or undefined.
 *
 * ```ts
  const result = when(
    11,
    [(n) => n === 0, () => "zero"],
    [(n) => n % 2 === 0, () => "even"],
    [(n) => n % 2 !== 0, () => "odd"]
  );

	console.log(result); // odd
```
 */
export function when<T, R>(
	value: T,
	...patterns: [(val: T) => boolean, (val: T) => R][]
): R | undefined {
	for (let i = 0; i < patterns.length; i++) {
		const [predicate, callback] = patterns[i];
		if (predicate(value)) {
			return callback(value);
		}
	}

	return undefined;
}

// const result = when(
// 	11,
// 	[(n) => n === 0, () => 'zero'],
// 	[(n) => n % 2 === 0, () => 'even'],
// 	[(n) => n % 2 !== 0, () => 'odd'],
// );

// console.log(result); // odd
