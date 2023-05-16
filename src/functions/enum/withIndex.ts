export function withIndex<T>(
  array: T[],
  func: (item: T, index: number) => void
): void {
  array.forEach((item, index) => {
    func(item, index);
  });
}

// const array = ["apple", "banana", "cherry"];
// withIndex(array, (item, index) => {
//   console.log(`Item: ${item}, Index: ${index}`); // Item: apple, Index: 0 Item: banana, Index: 1 Item: cherry, Index: 2
// });
