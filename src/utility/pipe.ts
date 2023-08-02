type PipeFunction<T, U> = (input: T) => U;

/**
 * Creates a function that pipes the output of one function to the input of the next function.
 *
 * @param {...PipeFunction<unknown, unknown>[]} fns - The functions to pipe.
 * @returns {PipeFunction<T, U>} - The composed function.
 */
export function pipe<T, U>(
	...fns: PipeFunction<unknown, unknown>[]
): PipeFunction<T, U> {
	return (input: T): U => {
		let result = input;

		for (let i = 0; i < fns.length; i++) {
			result = fns[i](result) as T;
		}

		return result as unknown as U;
	};
}
