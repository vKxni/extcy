export function mapFetch<TKey, TValue>(
  map: Map<TKey, TValue>,
  key: TKey
): TValue | undefined {
  return map.get(key);
}

// const fruitMap = new Map([
//     ['apple', 'red'],
//     ['banana', 'yellow'],
//     ['orange', 'orange'],
//   ]);

//  console.log(mapFetch(fruitMap, 'apple')); // red
//  console.log(mapFetch(fruitMap, 'grape')); // undefined
