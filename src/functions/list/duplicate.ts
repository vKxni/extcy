export function duplicateItems<T>(list: T[]): T[] {
  return list.concat(list);
}

// const fruits = ["apple", "banana", "orange"];
// const duplicatedFruits = duplicateItems(fruits);
// console.log(duplicatedFruits); // ['apple', 'banana', 'orange', 'apple', 'banana', 'orange']
