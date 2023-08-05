/**
 * Extracts matched groups from a string using a regular expression pattern.
 *
 * @param {RegExp} regex - The regular expression pattern.
 * @param {string} str - The input string.
 * @returns {string[]} - The array of matched groups.
 *
 * ```ts
	const capitalizedWords = sigil(/\b\w*[A-Za-z]\w*\b/g, "hello world this is a test");
	const numbers = sigil(/\d+/g, "I have 3 apples and 5 oranges.");

	console.log(capitalizedWords); // ["hello", "world", "this", "is", "a", "test"]
	console.log(numbers); // ["3", "5"]
	```
 */
export function sigil(regex: RegExp, str: string): string[] {
	const matches = str.match(regex);
	if (!matches) return [];

	return matches;
}

// const capitalizedWords = sigil(/\b\w*[A-Za-z]\w*\b/g, 'hello world this is a test');
// const numbers = sigil(/\d+/g, 'I have 3 apples and 5 oranges.');

// console.log(capitalizedWords); // ["hello", "world", "this", "is", "a", "test"]
// console.log(numbers); // ["3", "5"]
