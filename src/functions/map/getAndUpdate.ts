export function getAndUpdate<K, V>(
  map: Map<K, V>,
  key: K,
  updateFn: (value: V | undefined) => V
): V {
  const oldValue = map.get(key);
  const newValue = updateFn(oldValue);
  map.set(key, newValue);
  return newValue;
}

// const myMap = new Map<string, number>();
// const updatedValue = getAndUpdate(myMap, "key1", (oldValue) => (oldValue ?? 0) + 1);
// console.log(updatedValue); // 1
// console.log(myMap); // Map { 'key1' => 1 }