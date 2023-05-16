export function sum(list: number[]): number {
  return list.reduce((acc, x) => acc + x, 0);
}

// const list = [1, 2, 3, 4, 5];
// const result = sum(list);
// console.log(result); // 15
