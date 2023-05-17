/**
 * Shuffles the elements of an array randomly and returns the shuffled array.
 *
 * @param {T[]} list - The array to be shuffled.
 * @returns {T[]} - The shuffled array.
 */
export function shuffle<T>(list: T[]): T[] {
  const shuffled = [...list];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// console.log(shuffle([1, 2, 3, 4, 5])); // Output: [3, 2, 4, 5, 1] (random order)
