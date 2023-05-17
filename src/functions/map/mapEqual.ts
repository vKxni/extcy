/**
 * Checks if two maps are equal by comparing their sizes and values.
 *
 * @param {Map<any, any>} map1 - The first map.
 * @param {Map<any, any>} map2 - The second map.
 * @returns {boolean} - True if the maps are equal, false otherwise.
 */
export function mapEqual(map1: Map<any, any>, map2: Map<any, any>): boolean {
  if (map1.size !== map2.size) {
    return false;
  }

  const keys1 = Array.from(map1.keys());

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    const value1 = map1.get(key);
    const value2 = map2.get(key);

    if (value2 === undefined || value1 !== value2) {
      return false;
    }
  }

  return true;
}

// const map1 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// const map2 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// const map3 = new Map([
//   ["a", 1],
//   ["b", 3],
// ]);

// console.log(mapEqual(map1, map2)); // true
// console.log(mapEqual(map1, map3)); // false
