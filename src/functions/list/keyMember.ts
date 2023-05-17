export function keyMember(
  list: Record<string, any>[],
  key: string,
  value: any
): boolean {
  return list.some((item) => item[key] === value);
}

// const data = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Alice" },
// ];

// console.log(keyMember(data, "id", 2)); // true

// console.log(keyMember(data, "name", "Bob")); // false
