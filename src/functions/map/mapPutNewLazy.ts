export function mapPutNewLazy<K, V>(
  map: Map<K, V>,
  key: K,
  valueProvider: () => V
): Map<K, V> {
  if (!map.has(key)) {
    map.set(key, valueProvider());
  }

  return map;
}

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// mapPutNewLazy(map, "c", () => 3);
// mapPutNewLazy(map, "b", () => 4); // 'b' already exists, so the valueProvider is not called

// console.log(map); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
