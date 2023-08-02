/**
 * Extracts matched groups from a string using a regular expression pattern.
 *
 * @param {RegExp} regex - The regular expression pattern.
 * @param {string} str - The input string.
 * @returns {string[]} - The array of matched groups.
 */
export function sigil(regex: RegExp, str: string): string[] {
	const matches = str.match(regex);
	if (!matches) return [];

	return matches;
}
