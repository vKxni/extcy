export function flattenList<T>(list: T[][]): T[] {
  return list.reduce((result, current) => result.concat(current), []);
}

// const nestedList = [
//  [1, 2, 3],
//  [4, 5],
//  [6, 7, 8, 9],
// ];
// const flattenedList = flattenList(nestedList);
// console.log(flattenedList); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
