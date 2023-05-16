type MapType<T> = {
  [key: string]: T;
};

export function update<K extends string, V>(
  map: MapType<V>,
  key: K,
  transform: (value: V | undefined) => V
): MapType<V> {
  const currentValue = map[key];
  const transformedValue = transform(currentValue);

  if (currentValue === transformedValue) return map;

  return {
    ...map,
    [key]: transformedValue,
  };
}

// const emptyMap = {};
// const updatedMap = update(emptyMap, "key", () => "value");
// console.log(updatedMap); // { key: 'value' }
