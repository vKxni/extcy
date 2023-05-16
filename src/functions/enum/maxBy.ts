export function maxBy<T, K>(
  array: T[],
  selector: (item: T) => K
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  let maxItem = array[0];
  let maxValue = selector(maxItem);

  for (let i = 1; i < array.length; i++) {
    const currentItem = array[i];
    const currentValue = selector(currentItem);

    if (currentValue > maxValue) {
      maxItem = currentItem;
      maxValue = currentValue;
    }
  }

  return maxItem;
}

// interface Person {
//     name: string;
//     age: number;
//   }
  
//   const people: Person[] = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 },
//   ];
  
//   const oldestPerson = maxBy(people, (person) => person.age);
//   console.log(oldestPerson); // { name: 'Bob', age: 30 }
  