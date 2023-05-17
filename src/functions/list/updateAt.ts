export function updateAt<T>(list: T[], index: number, newValue: T): T[] {
  if (index < 0 || index >= list.length) {
    throw new Error("Index out of bounds");
  }

  const result = [...list];
  result[index] = newValue;
  return result;
}

// const list = ["apple", "banana", "cherry"];
// const updated = updateAt(list, 1, "orange");
// console.log(updated); // ['apple', 'orange', 'cherry']
