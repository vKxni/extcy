/**
 * The `Kernel` class provides a collection of utility functions similar to those found in the Elixir standard library.
 * 
 * https://hexdocs.pm/elixir/1.14/Kernel.html
 *
     * ```ts
    const kernel = new Kernel();

    console.log(kernel.binaryPart("hello", 1, 3)); // => "ell"
    console.log(kernel.bitSize("110101")); // => 6
    console.log(kernel.byteSize("110101")); // => 1
    console.log(kernel.ceil(3.14)); // => 4
    console.log(kernel.div(10, 3)); // => 3

    const tuple = [1, "hello", true];
    console.log(kernel.elem(tuple, 1)); // => "hello"
    console.log(kernel.floor(3.14)); // => 3


    const list = [10, 20, 30];
    console.log(kernel.hd(list)); // => 10

    console.log(kernel.in(3, [1, 2, 3])); // => true

    console.log(kernel.isAtom("hello")); // => true

    console.log(kernel.isBinary("hello")); // => true

    console.log(kernel.isBoolean(true)); // => true

    console.log(kernel.isException(new Error("Some error"))); // => true

    console.log(kernel.isFloat(3.14)); // => true

    console.log(kernel.isInteger(42)); // => true

    console.log(kernel.isList([1, 2, 3])); // => true

    console.log(kernel.isMap({ name: "John", age: 30 })); // => true

    console.log(kernel.isNil(null)); // => true

    console.log(kernel.isNumber(42)); // => true

    console.log(kernel.isPid({ pid: "process_id@node" })); // => true

    console.log(kernel.isPort({ port: "port_id@node" })); // => true

    console.log(kernel.isReference({ ref: "ref_id@node" })); // => true

    console.log(kernel.isTuple([1, 2, 3])); // => true

    console.log(kernel.length([1, 2, 3])); // => 3

    console.log(kernel.mapSize({ name: "John", age: 30 })); // => 2

    console.log(kernel.not(true)); // => false

    console.log(kernel.or(true, false)); // => true

    console.log(kernel.rem(10, 3)); // => 1

    console.log(kernel.round(3.14)); // => 3

    console.log(kernel.tl([1, 2, 3])); // => [2, 3]

    console.log(kernel.trunc(3.14)); // => 3

    console.log(kernel.tupleSize([1, 2, 3])); // => 3
```
 */
class Kernel {
    /**
     * Extracts the part of the binary starting at `start` with length `length`.
     * @param binary - The input binary.
     * @param start - The starting index.
     * @param length - The length of the extracted part.
     * @returns The extracted part of the binary as a new string.
     */
    binaryPart(binary: string, start: number, length: number): string {
        return binary.substring(start, length);
    }

    /**
     * Returns the size in bits of the `bitstring`.
     * @param bitstring - The input bitstring.
     * @returns The size of the bitstring in bits.
     */
    bitSize(bitstring: string): number {
        return bitstring.length;
    }

    /**
     * Returns the number of bytes needed to contain the `bitstring`.
     * @param bitstring - The input bitstring.
     * @returns The number of bytes needed to contain the bitstring.
     */
    byteSize(bitstring: string): number {
        return Math.ceil(bitstring.length / 8);
    }

    /**
     * Returns the smallest integer greater than or equal to `number`.
     * @param number - The input number.
     * @returns The smallest integer greater than or equal to the input number.
     */
    ceil(number: number): number {
        return Math.ceil(number);
    }

    /**
     * Performs an integer division and returns the quotient.
     * @param dividend - The dividend.
     * @param divisor - The divisor.
     * @returns The quotient of the integer division.
     */
    div(dividend: number, divisor: number): number {
        return Math.floor(dividend / divisor);
    }

    /**
     * Gets the element at the zero-based `index` in the `tuple`.
     * @param tuple - The input tuple.
     * @param index - The zero-based index.
     * @returns The element at the specified index in the tuple.
     */
    elem(tuple: any[], index: number): any {
        return tuple[index];
    }

    /**
     * Returns the largest integer smaller than or equal to `number`.
     * @param number - The input number.
     * @returns The largest integer smaller than or equal to the input number.
     */
    floor(number: number): number {
        return Math.floor(number);
    }

    /**
     * Returns the head of a list.
     * @param list - The input list.
     * @returns The first element of the list.
     * @throws An `Error` if the list is empty.
     */
    hd(list: any[]): any {
        if (list.length === 0) {
            throw new Error("ArgumentError: List is empty");
        }
        return list[0];
    }

    /**
     * Membership operator. Checks if the element on the `left` is a member of the collection on the `right`.
     * @param left - The element to check for membership.
     * @param right - The collection to check membership against.
     * @returns `true` if the element is a member of the collection, `false` otherwise.
     */
    in(left: any, right: any[]): boolean {
        return right.includes(left);
    }

    /**
     * Returns `true` if `term` is an atom; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is an atom; otherwise, returns `false`.
     */
    isAtom(term: any): boolean {
        return typeof term === "string";
    }

    /**
     * Returns `true` if `term` is a binary; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a binary; otherwise, returns `false`.
     */
    isBinary(term: any): boolean {
        return typeof term === "string";
    }

    /**
     * Returns `true` if `term` is a bitstring (including a binary); otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a bitstring; otherwise, returns `false`.
     */
    isBitstring(term: any): boolean {
        return typeof term === "string";
    }

    /**
     * Returns `true` if `term` is a boolean; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a boolean; otherwise, returns `false`.
     */
    isBoolean(term: any): boolean {
        return typeof term === "boolean";
    }

    /**
     * Returns `true` if `term` is an exception; otherwise, returns `false`.
     * @param term - The input term to check.
     * @param name - (Optional) The name of the exception to check against.
     * @returns `true` if the input term is an exception (or a specific exception if `name` is provided); otherwise, returns `false`.
     */
    isException(term: any, name?: string): boolean {
        if (name) {
            return term instanceof Error && term.name === name;
        } else {
            return term instanceof Error;
        }
    }

    /**
     * Returns `true` if `term` is a floating-point number; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a floating-point number; otherwise, returns `false`.
     */
    isFloat(term: any): boolean {
        return typeof term === "number" && !Number.isInteger(term);
    }

    /**
     * Returns `true` if `term` is a function; otherwise, returns `false`.
     * If `arity` is provided, it also checks if the function can be applied with `arity` number of arguments.
     * @param term - The input term to check.
     * @param arity - (Optional) The number of arguments the function can be applied with.
     * @returns `true` if the input term is a function (and optionally, with the specified `arity`); otherwise, returns `false`.
     */
    isFunction(term: any, arity?: number): boolean {
        if (arity) {
            return typeof term === "function" && term.length === arity;
        } else {
            return typeof term === "function";
        }
    }

    /**
     * Returns `true` if `term` is an integer; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is an integer; otherwise, returns `false`.
     */
    isInteger(term: any): boolean {
        return typeof term === "number" && Number.isInteger(term);
    }

    /**
     * Returns `true` if `term` is a list with zero or more elements; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a list; otherwise, returns `false`.
     */
    isList(term: any): boolean {
        return Array.isArray(term);
    }

    /**
     * Returns `true` if `term` is a map; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a map; otherwise, returns `false`.
     */
    isMap(term: any): boolean {
        return typeof term === "object" && !Array.isArray(term) && term !== null;
    }

    /**
     * Returns `true` if `key` is a key in the `map`; otherwise, returns `false`.
     * @param map - The input map to check.
     * @param key - The key to check for in the map.
     * @returns `true` if the `key` is present in the `map`; otherwise, returns `false`.
     */
    isMapKey(map: Record<string, any>, key: string): boolean {
        return key in map;
    }

    /**
     * Returns `true` if `term` is `null` or `undefined`; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is `null` or `undefined`; otherwise, returns `false`.
     */
    isNil(term: any): boolean {
        return term === null || term === undefined;
    }

    /**
     * Returns `true` if `term` is either an integer or a floating-point number; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a number; otherwise, returns `false`.
     */
    isNumber(term: any): boolean {
        return typeof term === "number";
    }

    /**
     * Returns `true` if `term` is a PID (Process Identifier); otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a PID; otherwise, returns `false`.
     */
    isPid(term: any): boolean {
        return typeof term === "object" && term.hasOwnProperty("pid");
    }

    /**
     * Returns `true` if `term` is a port identifier; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a port identifier; otherwise, returns `false`.
     */
    isPort(term: any): boolean {
        return typeof term === "object" && term.hasOwnProperty("port");
    }

    /**
     * Returns `true` if `term` is a reference; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a reference; otherwise, returns `false`.
     */
    isReference(term: any): boolean {
        return typeof term === "object" && term.hasOwnProperty("ref");
    }

    /**
     * Returns `true` if `term` is a struct (custom data structure); otherwise, returns `false`.
     * If `name` is provided, it also checks if the struct is of the specified `name`.
     * @param term - The input term to check.
     * @param name - (Optional) The name of the struct to check against.
     * @returns `true` if the input term is a struct (and optionally, with the specified `name`); otherwise, returns `false`.
     */
    isStruct(term: any, name?: string): boolean {
        if (name) {
            return typeof term === "object" && term.constructor?.name === name;
        } else {
            return typeof term === "object" && term.constructor?.name !== "Object";
        }
    }

    /**
     * Returns `true` if `term` is a tuple; otherwise, returns `false`.
     * @param term - The input term to check.
     * @returns `true` if the input term is a tuple; otherwise, returns `false`.
     */
    isTuple(term: any): boolean {
        return Array.isArray(term) && Object.getPrototypeOf(term) === Array.prototype;
    }

    /**
     * Returns the length of the `list`.
     * @param list - The input list.
     * @returns The length of the list.
     */
    length(list: any[]): number {
        return list.length;
    }

    /**
     * Returns the size of a `map`.
     * @param map - The input map.
     * @returns The size of the map.
     */
    mapSize(map: Record<string, any>): number {
        return Object.keys(map).length;
    }

    /**
     * Strictly boolean "not" operator.
     * @param value - The input value to negate.
     * @returns The negation of the input value (i.e., `true` becomes `false`, and `false` becomes `true`).
     */
    not(value: any): boolean {
        return !value;
    }

    /**
     * Strictly boolean "or" operator.
     * @param left - The left-hand side operand.
     * @param right - The right-hand side operand.
     * @returns `true` if either `left` or `right` is truthy; otherwise, returns `false`.
     */
    or(left: any, right: any): boolean {
        return Boolean(left || right);
    }

    /**
     * Computes the remainder of an integer division.
     * @param dividend - The dividend.
     * @param divisor - The divisor.
     * @returns The remainder of the integer division.
     */
    rem(dividend: number, divisor: number): number {
        return dividend % divisor;
    }

    /**
     * Rounds a `number` to the nearest integer.
     * @param number - The input number to round.
     * @returns The nearest integer to the input number.
     */
    round(number: number): number {
        return Math.round(number);
    }

    /**
     * Returns the tail of a list.
     * @param list - The input list.
     * @returns The list without its first element.
     * @throws An `Error` if the list is empty.
     */
    tl(list: any[]): any[] {
        if (list.length === 0) {
            throw new Error("ArgumentError: List is empty");
        }
        return list.slice(1);
    }

    /**
     * Returns the integer part of a `number`.
     * @param number - The input number.
     * @returns The integer part of the input number.
     */
    trunc(number: number): number {
        return Math.trunc(number);
    }

    /**
     * Returns the size of a `tuple`.
     * @param tuple - The input tuple.
     * @returns The size of the tuple.
     */
    tupleSize(tuple: any[]): number {
        return tuple.length;
    }
}


// const kernel = new Kernel();

// console.log(kernel.binaryPart("hello", 1, 3)); // => "ell"
// console.log(kernel.bitSize("110101")); // => 6
// console.log(kernel.byteSize("110101")); // => 1
// console.log(kernel.ceil(3.14)); // => 4
// console.log(kernel.div(10, 3)); // => 3

// const tuple = [1, "hello", true];
// console.log(kernel.elem(tuple, 1)); // => "hello"
// console.log(kernel.floor(3.14)); // => 3


// const list = [10, 20, 30];
// console.log(kernel.hd(list)); // => 10

// console.log(kernel.in(3, [1, 2, 3])); // => true

// console.log(kernel.isAtom("hello")); // => true

// console.log(kernel.isBinary("hello")); // => true

// console.log(kernel.isBoolean(true)); // => true

// console.log(kernel.isException(new Error("Some error"))); // => true

// console.log(kernel.isFloat(3.14)); // => true

// console.log(kernel.isInteger(42)); // => true

// console.log(kernel.isList([1, 2, 3])); // => true

// console.log(kernel.isMap({ name: "John", age: 30 })); // => true

// console.log(kernel.isNil(null)); // => true

// console.log(kernel.isNumber(42)); // => true

// console.log(kernel.isPid({ pid: "process_id@node" })); // => true

// console.log(kernel.isPort({ port: "port_id@node" })); // => true

// console.log(kernel.isReference({ ref: "ref_id@node" })); // => true

// console.log(kernel.isTuple([1, 2, 3])); // => true

// console.log(kernel.length([1, 2, 3])); // => 3

// console.log(kernel.mapSize({ name: "John", age: 30 })); // => 2

// console.log(kernel.not(true)); // => false

// console.log(kernel.or(true, false)); // => true

// console.log(kernel.rem(10, 3)); // => 1

// console.log(kernel.round(3.14)); // => 3

// console.log(kernel.tl([1, 2, 3])); // => [2, 3]

// console.log(kernel.trunc(3.14)); // => 3

// console.log(kernel.tupleSize([1, 2, 3])); // => 3