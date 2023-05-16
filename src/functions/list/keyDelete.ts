export function keyDelete<T>(
  list: { key: string; value: T }[],
  key: string
): { key: string; value: T }[] {
  return list.filter((item) => item.key !== key);
}

// const data = [
//   { key: "a", value: 1 },
//   { key: "b", value: 2 },
//   { key: "c", value: 3 },
//   { key: "d", value: 4 },
// ];

// const filtered = keyDelete(data, "b");
// console.log(filtered); // [{ key: 'a', value: 1 }, { key: 'c', value: 3 }, { key: 'd', value: 4 }]
