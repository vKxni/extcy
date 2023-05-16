export function frequencies<T>(collection: T[]): Map<T, number> {
  const freqMap = new Map<T, number>();

  for (const item of collection) {
    freqMap.set(item, (freqMap.get(item) ?? 0) + 1);
  }

  return freqMap;
}

// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const frequencyMap = frequencies(numbers);
// console.log(frequencyMap);
// // Map(4) { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }
