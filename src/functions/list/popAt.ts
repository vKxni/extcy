export function popAt<T>(list: T[], index: number): T[] {
  if (index < 0 || index >= list.length) {
    throw new Error("Index out of bounds");
  }

  const result = [...list];
  result.splice(index, 1);
  return result;
}

// const list = [1, 2, 3, 4, 5];
// const popped = popAt(list, 2);
// console.log(popped); // [1, 2, 4, 5]
