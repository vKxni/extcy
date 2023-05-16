export function deleteItem<T>(list: T[], item: T): T[] {
  return list.filter((value) => value !== item);
}

// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = deleteItem(numbers, 3);
// console.log(updatedNumbers); // Output: [1, 2, 4, 5]
