type KeysOf<T> = T extends Record<string, unknown> ? {
	[K in keyof T]-?: K extends string ? `${K}` | (T[K] extends null | undefined ? never : `${K}.${KeysOf<NonNullable<T[K]>>}`) : never;
}[keyof T] : never;

/**
 * Deletes keys from an nested object.
 *
 * @param {T} obj - The object to delete keys from.
 * @param {string[][]} keysToRemove - The keys to delete.
 * @returns {T} - The updated object.
 */

export function keysDelete<T extends Record<string, unknown>>(obj: T, ...keysToRemove: (KeysOf<T> & string)[][]): T {
	for (const forbiddenKeys of keysToRemove) {
		for (const key of forbiddenKeys) {
			const keyParts = key.split('.');
			let currentObj: Record<string, unknown> = obj;

			for (let i = 0; i < keyParts.length; i++) {
				const currentKey = keyParts[i] as keyof typeof currentObj;

				if (!(currentKey in currentObj)) break;

				if (i === keyParts.length - 1) {
					delete currentObj[currentKey];
					break;
				}

				currentObj = currentObj[currentKey] as Record<string, unknown>;
			}
		}
	}

	return obj;
}

// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: 4,
//         },
//     },
//     g: {
//         h: 5,
//     },
// };

// const updatedObj = objectKeyDelete(obj, ["a", "b.d.f", "g.h"]);
// console.log(updatedObj); // { b: { c: 2, d: { e: 3 } } }
