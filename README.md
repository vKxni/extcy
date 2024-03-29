# <p align="center">Extcy</p>

[![Discord](https://img.shields.io/discord/823720615965622323.svg?style=for-the-badge)](https://discord.gg/UDNcTrBagN)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vkxni)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/alelievr/Mixture/blob/master/LICENSE)

<p align="center">
<img src="exts.png"    alt="Extcy" width="250" height="250"/></a>
<p>

<p align="center">
Bringing the best Elixir utilities to TypeScript, with Extcy.
<p>

---

Want to feel the magic of functional programming, directly in your NodeJS project? Here is the perfect solution!

Elixir has one of the most powerful standard libraries of any language. It's also one of the most enjoyable languages to write in. Extcy brings the best of Elixir to TypeScript, with a focus on functional programming and immutability. Pattern matching, pipe operators, and much more aren't a problem anymore. Perfect for everyone who doesn't want to write in Elixir, but still wants to use its powerful utilities to avoid repeating themselves.

# Installation

```bash
npm install extcy
yarn add extcy
```

## Examples

`groupBy`

```ts
const list = [1, 2, 3, 4, 5];
const result = groupBy(list, (x) => (x % 2 === 0 ? "even" : "odd"));
console.log(result); // { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }
```

`introsperse`

```ts
const list = [1, 2, 3];
const result = introsperse(list, 0);
console.log(result); // [1, 0, 2, 0, 3]
```

`frequencies`

```ts
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequencyMap = frequencies(numbers);
console.log(frequencyMap); // { 1 => 1, 2 => 2, 3 => 3, 4 => 4 }
```

`keySort`

```ts
const data = [
    { id: 3, name: "Alice" },
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
];

const sortedData = keySort(data, "id");
console.log(sortedData); // [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Alice' }]
```

`when`

```ts
const result = when(
    11,
    [(n) => n === 0, () => "zero"],
    [(n) => n % 2 === 0, () => "even"],
    [(n) => n % 2 !== 0, () => "odd"]
);

console.log(result); // odd
```

`pipe`

```ts
// functions for numbers
const addOne = (n: number) => n + 1;
const double = (n: number) => n * 2;
const square = (n: number) => n * n;

// functions for strings
const concatenate = (s: string) => s + ' World';
const toUpperCase = (s: string) => s.toUpperCase();

// functions for arrays
const reverseArray = (arr: unknown[]) => [...arr].reverse();
const sortArray = (arr: unknown[]) => [...arr].sort();

// numbers
const result1 = pipe<number>(addOne, double, square)(3);
console.log(result1); // => 64

// strings
const result2 = pipe<string>(concatenate, toUpperCase)('Hello');
console.log(result2); // => "HELLO WORLD"

// arrays
const result3 = pipe<unknown[]>(reverseArray, sortArray)([4, 6, 5, 2]);
console.log(result3); // => "[2, 4, 5, 6]"
```

`sigil`

```ts
const capitalizedWords = sigil(/\b\w*[A-Za-z]\w*\b/g, "hello world this is a test");
const numbers = sigil(/\d+/g, "I have 3 apples and 5 oranges.");

console.log(capitalizedWords); // ["hello", "world", "this", "is", "a", "test"]
console.log(numbers); // ["3", "5"]
```

We offer a lot of more utility functions and modules to make your life easier.
Check out the **[documentation](https://extcy.vercel.app/)** for more information.

© Extcy 2022, [MIT Licence](/LICENSE), by [@vKxni](https://github.com/vKxni).
