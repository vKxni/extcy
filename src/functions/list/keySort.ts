export function keySort(
  list: Record<string, any>[],
  key: string
): Record<string, any>[] {
  return list.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

// const data = [
//   { id: 3, name: "Alice" },
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const sortedData = keySort(data, "id");
// console.log(sortedData); // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }]
