export function sortBy<T, K>(
  arr: T[],
  keyFn: (item: T) => K,
  compareFn: (a: K, b: K) => number
): T[] {
  return arr.slice().sort((a, b) => compareFn(keyFn(a), keyFn(b)));
}

// interface Person {
//     name: string;
//     age: number;
//   }

//   const people: Person[] = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 32 },
//     { name: "Bob", age: 19 },
//   ];

//   const sortedPeople = sortBy(
//     people,
//     (person) => person.age,
//     (a, b) => a - b
//   );
//   console.log(sortedPeople); // Output: [{ name: 'Bob', age: 19 }, { name: 'John', age: 25 }, { name: 'Alice', age: 32 }]
