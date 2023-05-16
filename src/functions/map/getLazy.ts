export function getLazy<K, V>(
  map: Map<K, V>,
  key: K,
  defaultValueFn: () => V
): V {
  if (map.has(key)) {
    return map.get(key)!;
  }
  const defaultValue = defaultValueFn();
  map.set(key, defaultValue);
  return defaultValue;
}

// const myMap = new Map<string, number>();
// const value = getLazy(myMap, "key1", () => {
//   console.log("Computing default value...");
//   return 42;
// });
// console.log(value); // 42