type KeywordList = [string, unknown][];

interface Access<V> {
    get(key: unknown): V | null;
}

/**
 * Access behavior implementation for keyword lists.
 *
 * Key-based access to data structures.
 * 
 * https://hexdocs.pm/elixir/1.12.3/Access.html
 * 
 *  ```ts
    const mapData: Map<unknown, unknown> = new Map();
    mapData.set('name', 'John');
    mapData.set(42, 'answer');
    mapData.set('email', 'john@example.com');

    const mapAccess = new MapAccess(mapData);

    console.log(mapAccess.get('name')); // John
    console.log(mapAccess.get(42)); // answer
    console.log(mapAccess.get({ key: 'email' })); // john@example.com
    console.log(mapAccess.get('gender')); // null
    ```
 */
class KeywordAccess {
    private keywordList: KeywordList;

    /**
     * Creates a new instance of `KeywordAccess` with the provided keyword list.
     * @param keywordList The keyword list to be accessed.
     */
    constructor(keywordList: KeywordList) {
        this.keywordList = keywordList;
    }

    /**
     * Get the value associated with the specified key in the keyword list.
     * @param key The key to be accessed.
     * @returns The value associated with the key, or `null` if the key is not found.
     */
    get(key: string): unknown {
        const result = this.keywordList.find(([k]) => k === key);
        return result ? result[1] : null;
    }
}

/**
 * MapAccess implements the Access interface for dynamically accessing keys in a Map data structure.
 * @template K The type of keys in the Map.
 * @template V The type of values in the Map.
 */
class MapAccess<K, V> implements Access<V> {
    /**
     * The Map object to be accessed.
     * @private
     */
    private _map: Map<K, V>;

    /**
     * Creates a new instance of MapAccess with the provided Map.
     * @param map The Map to be accessed.
     */
    constructor(map: Map<K, V>) {
        this._map = map;
    }

    /**
     * Get the value associated with the specified key in the Map.
     * If the key is not found in the Map, returns null.
     * @param key The key to be accessed. It can be of unknown type.
     * @returns The value associated with the specified key, or null if the key is not found.
     
     * TODO: Fix "any" type
     */
    get(key: any): V | null {
        const mapKey = typeof key === 'object' ? key.key : key;
        return this._map.get(mapKey) || null;
    }
}

// const mapData: Map<unknown, unknown> = new Map();
// mapData.set('name', 'John');
// mapData.set(42, 'answer');
// mapData.set('email', 'john@example.com');

// const mapAccess = new MapAccess(mapData);

// console.log(mapAccess.get('name')); // John
// console.log(mapAccess.get(42)); // answer
// console.log(mapAccess.get({ key: 'email' })); // john@example.com
// console.log(mapAccess.get('gender')); // null