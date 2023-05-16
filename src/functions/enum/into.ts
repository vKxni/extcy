export function into<T>(collection: T[], element: T): T[] {
  return [...collection, element];
}

export function intoCollection<T>(
  collection: T[],
  element: T,
  index: number
): T[] {
  return [...collection.slice(0, index), element, ...collection.slice(index)];
}

// console.log(into([1, 2, 3, 4], 5)); // Output: [1, 2, 3, 4, 5]

// console.log(intoCollection([1, 2, 3, 4], 5, 1)); // Output: [1, 5, 2, 3, 4]
