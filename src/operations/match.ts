type Pattern<T> = {
    [K in keyof T]?: ((value: T[K]) => boolean) | Pattern<T[K]>;
};

/**
 * Matches an object against a pattern and determines if it matches the pattern.
 *
 * @param {T} obj - The object to match.
 * @param {Pattern<T>} pattern - The pattern to match against.
 * @returns {boolean} - True if the object matches the pattern, false otherwise.
 *
 ```ts
 	const result = match(
	{
  	name: 'John',
  	age: 30,
	},
	{
  	name: 'John',
  	age: (age) => age > 20,
    });

	console.log(result); // => true
```
 */
export function match<T>(obj: T, pattern: Pattern<T>): boolean {
	const patternKeys = Object.keys(pattern);

	for (let i = 0; i < patternKeys.length; i++) {
		const key = patternKeys[i];

		if (Object.prototype.hasOwnProperty.call(pattern, key)) {
			const value = obj[key as keyof T];
			const matcher = pattern[key as keyof T];

			switch (typeof matcher) {
				case 'function': {
					if (!matcher(value)) return false;
					break;
				}
				case 'object': {
					if (!match(value, matcher)) return false;
					break;
				}
				default: {
					if (matcher !== value) return false;
					break;
				}
			}
		}
	}

	return true;
}

// const result = match(
// 	{
// 		name: 'John',
// 		age: 30,
// 	},
// 	{
// 		name: 'John',
// 		age: (age) => age > 20,
// 	},
// );

// console.log(result); // => true
