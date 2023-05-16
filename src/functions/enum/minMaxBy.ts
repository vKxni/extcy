export function minMaxBy<T, R>(
  array: T[],
  selector: (item: T) => R,
  comparer: (a: R, b: R) => number
): [T | undefined, T | undefined] {
  if (array.length === 0) {
    return [undefined, undefined];
  }

  let min = array[0];
  let max = array[0];

  array.forEach((item) => {
    if (comparer(selector(item), selector(min)) < 0) {
      min = item;
    }
    if (comparer(selector(item), selector(max)) > 0) {
      max = item;
    }
  });

  return [min, max];
}

// const array = [5, 2, 8, 1, 4];
// const [min, max] = minMaxBy(
//   array,
//   (num) => num,
//   (a, b) => a - b
// );
// console.log(`Min: ${min}, Max: ${max}`); // Min: 1, Max: 8
