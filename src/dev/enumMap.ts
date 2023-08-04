/**
 * Applies the provided callback function to each element of the input array and returns a new array with the results.
 * @param arr The input array.
 * @param callback The callback function to be applied to each element of the input array.
 * @returns A new array containing the results of applying the callback function to each element of the input array.
 * 
 * ```ts
    const array: number[] = [1, 2, 3];
    const out: number[] = enumMap(array, (x) => x * 2)
    console.log(out); // [2, 4, 6]
```
 */
function enumMap<T, R>(arr: T[], callback: (value: T) => R): R[] {
    const result: R[] = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const item = arr[i];
        result.push(callback(item));
    }
    return result;
}

// const array: number[] = [1, 2, 3];
// const out: number[] = enumMap(array, (x) => x * 2)
// console.log(out); // [2, 4, 6]