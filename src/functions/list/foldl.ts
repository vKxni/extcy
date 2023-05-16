export function foldl<T, U>(
  list: T[],
  accumulator: U,
  fn: (acc: U, current: T) => U
): U {
  let result = accumulator;
  for (const item of list) {
    result = fn(result, item);
  }
  return result;
}


// const numbers = [1, 2, 3, 4, 5];
// const sum = foldl(numbers, 0, (acc, current) => acc + current);
// console.log(sum); // 15

// const words = ['Hello', 'World', '!'];
// const concatenated = foldl(words, '', (acc, current) => acc + ' ' + current);
// console.log(concatenated); // ' Hello World !'

