type Condition<T> = {
    predicate: (value: T) => boolean;
    result: unknown;
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
