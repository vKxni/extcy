export function concat<T>(lists: T[][]): T[] {
  return ([] as T[]).concat(...lists);
}

export function concatLists<T>(list1: T[], list2: T[]): T[] {
  return list1.concat(list2);
}

// console.log(
//     concat([
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ])
//   ); // Output: [1, 2, 3, 4, 5, 6]

//   console.log(concat_lists([1, [2], 3], [4, 5, 6])); // Output: [ 1, [ 2 ], 3, 4, 5, 6 ]
