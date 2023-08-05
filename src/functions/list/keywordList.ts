type KeywordTuple = [string, unknown];
type KeywordListType = KeywordTuple[];

/**
 * Converts a keyword list in array format to object format.
 * @param keywordList The keyword list in array format.
 * @returns An object representation of the keyword list.
 *
 * ```ts
const options = [
    ["exit_on_close", true],
    ["active", "once"],
    ["packet_size", 1024],
];

// Converting the keyword list to an object
const optionsObject = keywordListToObject(options);
console.log(optionsObject);
// => { exit_on_close: true, active: 'once', packet_size: 1024 }

// Accessing values from the keyword list object
console.log(optionsObject.exit_on_close); // => true
console.log(optionsObject.active); // => 'once'
console.log(optionsObject.packet_size); // => 1024

// Modifying values in the keyword list object
optionsObject.active = 'continuous';
console.log(optionsObject.active); // => 'continuous'

// Converting the keyword list object back to an array
const updatedOptionsList = keywordObjectToList(optionsObject);
console.log(updatedOptionsList); // => [ [ 'exit_on_close', true ], [ 'active', 'continuous' ], [ 'packet_size', 1024 ] ]
```
 */
export function keywordListToObject(keywordList: KeywordListType): Record<string, unknown> {
	return keywordList.reduce((acc, [key, value]) => {
		acc[key] = value;
		return acc;
	}, {} as Record<string, unknown>);
}

/**
 * Converts a keyword list in object format to array format.
 * @param keywordObject The keyword list in object format.
 * @returns An array representation of the keyword list.
 */
export function keywordObjectToList(keywordObject: Record<string, unknown>): KeywordListType {
	return Object.entries(keywordObject) as KeywordListType;
}

// const options = [
//     ["exit_on_close", true],
//     ["active", "once"],
//     ["packet_size", 1024],
// ];

// // Converting the keyword list to an object
// const optionsObject = keywordListToObject(options);
// console.log(optionsObject);
// // => { exit_on_close: true, active: 'once', packet_size: 1024 }

// // Accessing values from the keyword list object
// console.log(optionsObject.exit_on_close); // => true
// console.log(optionsObject.active); // => 'once'
// console.log(optionsObject.packet_size); // => 1024

// // Modifying values in the keyword list object
// optionsObject.active = 'continuous';
// console.log(optionsObject.active); // => 'continuous'

// // Converting the keyword list object back to an array
// const updatedOptionsList = keywordObjectToList(optionsObject);
// console.log(updatedOptionsList); // => [ [ 'exit_on_close', true ], [ 'active', 'continuous' ], [ 'packet_size', 1024 ] ]
