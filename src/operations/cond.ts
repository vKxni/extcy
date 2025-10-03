type Condition<T> = {
    predicate: (value: T) => boolean;
    result: T | unknown;
};

/**
 * Evaluates a value against a set of conditions and returns the result of the first condition that matches the value.
 *
 * @param {T} value - The value to evaluate.
 * @param {...Array<Condition<T>>} conditions - The conditions to evaluate against.
 * @returns {*} - The result of the matching condition.
 */
export function cond<T>(value: T, ...conditions: Array<Condition<T>>): unknown {
	for (let i = 0; i < conditions.length; i++) {
		const condition = conditions[i];
		if (condition.predicate(value)) return condition.result;
	}
}

// const result = cond<number>(3,
// 	{ predicate: (value) => value === 1, result: 'one' },
// 	{ predicate: (value) => value === 2, result: 'two' },
// 	{ predicate: (value) => value === 3, result: 'three' },
// 	{ predicate: (value) => value === 4, result: 'four' },
// 	{ predicate: (value) => value === 5, result: 'five' },
// );

// console.log(result); // => "three"

