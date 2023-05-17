/**
 * Executes a callback function unless a condition is true. If the condition is true, undefined is returned.
 * If the condition is false, the callback function is executed and its return value is returned.
 *
 * @param {boolean} condition - The condition to check.
 * @param {() => T} callback - The callback function to execute.
 * @returns {T | undefined} - The result of the callback function or undefined.
 */
export function unless<T>(
  condition: boolean,
  callback: () => T
): T | undefined {
  if (!condition) {
    return callback();
  }
}
