export function takeRandom<T>(n: number, list: T[]): T[] {
  const shuffled = list.slice();
  let i = list.length;
  let temp;
  let index;

  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(0, n);
}

// const numbers = [1, 2, 3, 4, 5];
// const randomNumbers = takeRandom(3, numbers);
// console.log(randomNumbers); // random three numbers [?, ?, ?]

