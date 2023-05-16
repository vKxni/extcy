export function foldr<T, U>(
  list: T[],
  acc: U,
  func: (value: T, accumulator: U) => U
): U {
  if (list.length === 0) {
    return acc;
  }

  const [head, ...tail] = list;
  return func(head, foldr(tail, acc, func));
}

// const numbers = [1, 2, 3, 4, 5];

// const sum = foldr(numbers, 0, (value, acc) => value + acc);
// console.log(sum); // 15

// const words = ['Hello', 'World', '!'];
// const concatenated = foldr(words, '', (acc, current) => acc + ' ' + current);
// console.log(concatenated); // 'Hello World !'

