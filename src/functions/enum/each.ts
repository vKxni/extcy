export function each<T>(collection: T[], iteratee: (item: T) => void): void {
  for (let i = 0; i < collection.length; i++) {
    iteratee(collection[i]);
  }
}

// const numbers = [1, 2, 3, 4];
// each(numbers, (num) => console.log(num)); // 1 2 3 4 