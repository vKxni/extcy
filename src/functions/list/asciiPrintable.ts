/**
 * Filters a list of strings to only include those that contain printable ASCII characters.
 *
 * @param {string[]} list - The list of strings to filter.
 * @returns {string[]} - The filtered list of strings.
 */
export function asciiPrintable(list: string[]): string[] {
	return list.filter((str) => /^[\x20-\x7E]*$/.test(str));
}

// const strings = ['Hello', 'World', 'Lol', '🚀', '123', 'αβγ'];
// const filteredStrings = asciiPrintable(strings);
// console.log(filteredStrings); // ['Hello', 'World', 'LoL', '123']
