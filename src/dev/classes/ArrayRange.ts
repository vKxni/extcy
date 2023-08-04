/**
 * Represents a sequence of ascending or descending integers with a common difference called step.
 * Ranges are always inclusive.
 * 
 * https://hexdocs.pm/elixir/1.13/Range.html
 * 
 * ```ts
 const range1 = new ArrayRange(1, 10);
console.log(range1.toArray()); // => [1, 2, 3 ... 10]

const range2 = new ArrayRange(1, 3, 2);
console.log(range2.toArray()); // => [1, 3]

const range3 = new ArrayRange(3, 1, -1);
console.log(range3.toArray()); // => [3, 2, 1]

const range4 = new ArrayRange(1, 1);
console.log(range4.toArray()); // => [1]

const range5 = new ArrayRange(1, 1, 2);
console.log(range5.toArray()); // => [1]

const range6 = new ArrayRange(10, 0);
console.log(range6.toArray()); // => []

const range7 = new ArrayRange(0, 10, -1);
console.log(range7.toArray()); // => []

// Test Enumerable protocol functions
const range8 = new ArrayRange(1, 10);
const sum = range8.toArray().reduce((acc, i) => i * i + acc, 0);
console.log(sum); // => 385

const count = range8.toArray().length;
console.log(count); // => 10

const isMember1 = range8.toArray().includes(11);
console.log(isMember1); // => false

const isMember2 = range8.toArray().includes(8);
console.log(isMember2); // => true
```
 */
class ArrayRange {
    private _first: number;
    private _last: number;
    private _step: number;

    /**
     * Creates a new ArrayRange instance.
     * @param first The first value in the range.
     * @param last The last value in the range.
     * @param step The step size between elements (default is 1).
     * @throws An error if the step is 0.
     */
    constructor(first: number, last: number, step: number = 1) {
        if (step === 0) {
            throw new Error("Step cannot be 0.");
        }

        this._first = first;
        this._last = last;
        this._step = step;
    }

    /**
     * Gets the first value of the range.
     * @returns The first value of the range.
     */
    get first(): number {
        return this._first;
    }

    /**
     * Gets the last value of the range.
     * @returns The last value of the range.
     */
    get last(): number {
        return this._last;
    }

    /**
     * Gets the step size between elements in the range.
     * @returns The step size of the range.
     */
    get step(): number {
        return this._step;
    }

    /**
     * Returns an array containing all the values in the range.
     * @returns An array containing the elements of the range.
     */
    toArray(): number[] {
        const array: number[] = [];
        let current = this._first;

        while ((this._step > 0 && current <= this._last) || (this._step < 0 && current >= this._last)) {
            array.push(current);
            current += this._step;
        }

        return array;
    }
}

// const range1 = new ArrayRange(1, 10);
// console.log(range1.toArray()); // => [1, 2, 3 ... 10]

// const range2 = new ArrayRange(1, 3, 2);
// console.log(range2.toArray()); // => [1, 3]

// const range3 = new ArrayRange(3, 1, -1);
// console.log(range3.toArray()); // => [3, 2, 1]

// const range4 = new ArrayRange(1, 1);
// console.log(range4.toArray()); // => [1]

// const range5 = new ArrayRange(1, 1, 2);
// console.log(range5.toArray()); // => [1]

// const range6 = new ArrayRange(10, 0);
// console.log(range6.toArray()); // => []

// const range7 = new ArrayRange(0, 10, -1);
// console.log(range7.toArray()); // => []

// // Test Enumerable protocol functions
// const range8 = new ArrayRange(1, 10);
// const sum = range8.toArray().reduce((acc, i) => i * i + acc, 0);
// console.log(sum); // => 385

// const count = range8.toArray().length;
// console.log(count); // => 10

// const isMember1 = range8.toArray().includes(11);
// console.log(isMember1); // => false

// const isMember2 = range8.toArray().includes(8);
// console.log(isMember2); // => true