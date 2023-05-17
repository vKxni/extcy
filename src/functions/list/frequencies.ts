/**
 * Counts the frequencies of elements in a collection and returns a Map with the elements as keys and their frequencies as values.
 *
 * @param {T[]} collection - The collection to count frequencies of.
 * @returns {Map<T, number>} - The Map containing element frequencies.
 */
export function frequencies<T>(collection: T[]): Map<T, number> {
  const freqMap = new Map<T, number>();

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    freqMap.set(item, (freqMap.get(item) ?? 0) + 1);
  }

  return freqMap;
}

// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const frequencyMap = frequencies(numbers);
// console.log(frequencyMap);
// Map(4) { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }
