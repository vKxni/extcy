type KeyValueTuple<T, K> = [T, K];

export function keyStore<T, K>(
  list: T[],
  key: K,
  defaultValue: any,
  extractor: (item: T) => K
): KeyValueTuple<T, K>[] {
  return list.map((item) => [item, extractor(item) === key ? null : defaultValue]);
}

// interface Person {
//   id: number;
//   name: string;
// }

// const people: Person[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const result = keyStore(people, "name", "Unknown", (person) => person.name);
// console.log(result); // [[ { id: 1, name: 'Alice' }, 'Unknown' ], [ { id: 2, name: 'Bob' }, 'Unknown' ], [ { id: 3, name: 'Charlie' }, 'Unknown' ]]
