/**
* A class representing a Set data structure.
* A set is a data structure that can contain unique elements of any kind, without any particular order. MapSet is the "go to" set data structure in Elixir.
*
* A set can be constructed using `MapSet.new/0`
* 
* https://hexdocs.pm/elixir/1.13/MapSet.html
*
* ```ts
    const mapSet = MapSet.new<number>([2]);
    mapSet.put(4);
    mapSet.put(0);
    console.log(mapSet.values()); // => [2, 4, 0]

    mapSet.put(4); // Should not add duplicate element
    console.log(mapSet.values()); // => [2, 4, 0]

    console.log(mapSet.has(4)); // => true
    console.log(mapSet.has(5)); // => false

    mapSet.remove(4);
    console.log(mapSet.values()); // => [2, 0]

    const otherSet = MapSet.new<number>([2, 4]);
    console.log(mapSet.intersection(otherSet).values()); // => [2]
    console.log(mapSet.difference(otherSet).values()); // => [0]
    console.log(mapSet.union(otherSet).values()); // => [2, 0, 4]

    const subset = MapSet.new<number>([2]);
    console.log(subset.isSubset(mapSet)); // => true
```
*/
class MapSet<T> {
    private _elements: Set<T>;

    /**
     * Creates a new MapSet instance.
     * @param elements An array of elements to initialize the set.
     */
    constructor(elements: T[] = []) {
        this._elements = new Set(elements);
    }

    /**
     * Adds an element to the set if it does not already exist.
     * @param value The value to be added to the set.
     */
    put(value: T): void {
        this._elements.add(value);
    }

    /**
     * Removes an element from the set if it exists.
     * @param value The value to be removed from the set.
     */
    remove(value: T): void {
        this._elements.delete(value);
    }

    /**
     * Checks if an element exists in the set.
     * @param value The value to be checked.
     * @returns True if the element exists in the set, otherwise false.
     */
    has(value: T): boolean {
        return this._elements.has(value);
    }

    /**
     * Returns the size of the set.
     * @returns The number of elements in the set.
     */
    size(): number {
        return this._elements.size;
    }

    /**
     * Returns an array containing all the values in the set.
     * @returns An array containing the elements of the set.
     */
    toArray(): T[] {
        return Array.from(this._elements);
    }

    /**
     * Returns an array containing all the values in the set (alias for toArray).
     * @returns An array containing the elements of the set.
     */
    values(): T[] {
        return this.toArray();
    }

    /**
     * Creates a new MapSet instance.
     * @param elements An array of elements to initialize the set.
     * @returns A new MapSet instance.
     */
    static new<T>(elements: T[] = []): MapSet<T> {
        return new MapSet(elements);
    }

    /**
     * Checks if the set is empty.
     * @returns True if the set is empty, otherwise false.
     */
    isEmpty(): boolean {
        return this._elements.size === 0;
    }

    /**
     * Returns the intersection of this set with another set.
     * @param otherSet The other set to find the intersection with.
     * @returns A new MapSet containing the elements that exist in both sets.
     */
    intersection(otherSet: MapSet<T>): MapSet<T> {
        const intersectionSet = new MapSet<T>();
        for (const elem of this._elements) {
            if (otherSet.has(elem)) {
                intersectionSet.put(elem);
            }
        }
        return intersectionSet;
    }

    /**
     * Returns the difference between this set and another set.
     * @param otherSet The other set to find the difference with.
     * @returns A new MapSet containing the elements that exist in this set but not in the other set.
     */
    difference(otherSet: MapSet<T>): MapSet<T> {
        const differenceSet = new MapSet<T>();
        for (const elem of this._elements) {
            if (!otherSet.has(elem)) {
                differenceSet.put(elem);
            }
        }
        return differenceSet;
    }

    /**
     * Returns the union of this set with another set.
     * @param otherSet The other set to find the union with.
     * @returns A new MapSet containing all elements from both sets without duplicates.
     */
    union(otherSet: MapSet<T>): MapSet<T> {
        const unionSet = new MapSet<T>(this.toArray());
        for (const elem of otherSet.toArray()) {
            unionSet.put(elem);
        }
        return unionSet;
    }

    /**
     * Checks if this set is a subset of another set.
     * @param otherSet The other set to check if it contains all elements of this set.
     * @returns True if this set is a subset of the other set, otherwise false.
     */
    isSubset(otherSet: MapSet<T>): boolean {
        return this.toArray().every((elem) => otherSet.has(elem));
    }
}

// const mapSet = MapSet.new<number>([2]);
// mapSet.put(4);
// mapSet.put(0);
// console.log(mapSet.values()); // => [2, 4, 0]

// mapSet.put(4); // Should not add duplicate element
// console.log(mapSet.values()); // => [2, 4, 0]

// console.log(mapSet.has(4)); // => true
// console.log(mapSet.has(5)); // => false

// mapSet.remove(4);
// console.log(mapSet.values()); // => [2, 0]

// const otherSet = MapSet.new<number>([2, 4]);
// console.log(mapSet.intersection(otherSet).values()); // => [2]
// console.log(mapSet.difference(otherSet).values()); // => [0]
// console.log(mapSet.union(otherSet).values()); // => [2, 0, 4]

// const subset = MapSet.new<number>([2]);
// console.log(subset.isSubset(mapSet)); // => true
