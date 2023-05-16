export function fromStruct<T extends Record<string, unknown>>(
  struct: T
): Record<keyof T, unknown> {
  return Object.fromEntries(Object.entries(struct)) as Record<keyof T, unknown>;
}

// const myStruct = { field1: "value1", field2: 42 };
// const myMap = fromStruct(myStruct);
// console.log(myMap); // { field1: 'value1', field2: 42 }
