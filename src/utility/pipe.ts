type PipeFunction<T> = (arg: T) => T;

/**
 * Creates a function that pipes the output of one function to the input of the next function.
 *
 * @param {...PipeFunction<unknown, unknown>[]} fns - The functions to pipe.
 * @returns {PipeFunction<unknown, unknown>} - The piped function.
 *
 * ```ts
 	// functions for numbers
 	const addOne = (n: number) => n + 1;
 	const double = (n: number) => n * 2;
	const square = (n: number) => n * n;

	const result1 = pipe<number>(addOne, double, square)(3);
    console.log(result1); // => 64
	```
 */
export function pipe<T>(...functions: PipeFunction<T>[]): PipeFunction<T> {
	return (arg: T) => functions.reduce((prev, fn) => fn(prev), arg);
}

// functions for numbers
// const addOne = (n: number) => n + 1;
// const double = (n: number) => n * 2;
// const square = (n: number) => n * n;

// functions for strings
// const concatenate = (s: string) => s + ' World';
// const toUpperCase = (s: string) => s.toUpperCase();

// functions for arrays
// const reverseArray = (arr: unknown[]) => [...arr].reverse();
// const sortArray = (arr: unknown[]) => [...arr].sort();

// numbers
// const result1 = pipe<number>(addOne, double, square)(3);
// console.log(result1); // => 64

// strings
// const result2 = pipe<string>(concatenate, toUpperCase)('Hello');
// console.log(result2); // => "HELLO WORLD"

// arrays
// const result3 = pipe<unknown[]>(reverseArray, sortArray)([4, 6, 5, 2]);
// console.log(result3); // => "[2, 4, 5, 6]"
