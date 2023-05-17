/**
 * Removes duplicate elements from an array based on a key function and returns a new array with unique elements.
 *
 * @param {T[]} list - The array to remove duplicates from.
 * @param {(item: T) => U} fn - The key function used to extract the key for comparison.
 * @returns {T[]} - The new array with unique elements.
 */
export function uniqueBy<T, U>(list: T[], fn: (item: T) => U): T[] {
  const uniqueMap = new Map<U, T>();

  for (const item of list) {
    const key = fn(item);
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, item);
    }
  }

  return Array.from(uniqueMap.values());
}

// interface Person {
//     name: string;
//     age: number;
//   }

//   const people: Person[] = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 35 },
//     { name: "Charlie", age: 30 },
//   ];

//   const uniquePeople = uniqueBy(people, (person) => person.name);
//   console.log(uniquePeople);
//   // Output: [
//   //   { name: 'Alice', age: 25 },
//   //   { name: 'Bob', age: 30 },
//   //   { name: 'Charlie', age
