export function popLazy<K, V>(
  map: Map<K, V>,
  key: K,
  defaultValue: () => V
): V {
  if (map.has(key)) {
    const value = map.get(key)!;
    map.delete(key);
    return value;
  }
  return defaultValue();
}

// const map = new Map<string, number>([
//   ["a", 1],
//   ["b", 2],
// ]);

// const value = popLazy(map, "a", () => 0);
// console.log(value); // 1

// const nonExistentValue = popLazy(map, "c", () => 0);
// console.log(nonExistentValue); // 0
