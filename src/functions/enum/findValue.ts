export function findValue<TKey, TValue>(
  map: Map<TKey, TValue>,
  predicate: (value: TValue) => boolean
): TValue | undefined {
  for (const [key, value] of map.entries()) {
    if (predicate(value)) {
      return value;
    }
  }
  return undefined;
}

// const fruitMap = new Map([
//   ["apple", "red"],
//   ["banana", "yellow"],
//   ["orange", "orange"],
// ]);

// const value = findValue(fruitMap, (color) => color === "yellow");
// console.log(value); // yellow
