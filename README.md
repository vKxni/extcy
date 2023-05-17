# <p align="center">Extcy</p>

[![Discord](https://img.shields.io/discord/823720615965622323.svg?style=for-the-badge)](https://discord.gg/UDNcTrBagN)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vkxni)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/alelievr/Mixture/blob/master/LICENSE)

<p align="center">
<img src="exts.png"  alt="Extcy" width="250" height="250"/></a>
<p>

<p align="center">
Bringing the best Elixir utilities to TypeScript, with Extcy.
<p>

---

Want to feel the magic of functional programming, directly in your NodeJS project? Here is the perfect solution!

Elixir has one of the most powerful standard libraries of any language. It's also one of the most enjoyable languages to write in. Extcy brings the best of Elixir to TypeScript, with a focus on functional programming and immutability. Pattern matching, pipe operators, and much more aren't a problem anymore. Perfect for everyone who doesn't want to write in Elixir, but still wants to use its powerful utilities to avoid repeating themselves.

## Installation

```bash
npm install extcy
```

### Examples

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

`match`

```ts
const person1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "San Francisco",
    state: "California",
  },
};

const pattern1 = {
  name: "Alice",
  age: (age: number) => age >= 30,
  address: { state: "California" },
};
console.log(match(person1, pattern1)); // true
```

`cond`

```ts
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

function getColorName(color: Color): string {
  return cond(
    color,
    { predicate: (c) => c === Color.Red, result: "Red" },
    { predicate: (c) => c === Color.Blue, result: "Blue" },
    { predicate: (c) => c === Color.Green, result: "Green" }
  );
}

console.log(getColorName(Color.Red)); // "Red"
console.log(getColorName(Color.Blue)); // "Blue"
console.log(getColorName(Color.Green)); // "Green"
```

`pipe`

```ts
const addOne = (n: number) => n + 1;
const double = (n: number) => n * 2;
const square = (n: number) => n * n;

const result = pipe<number, number>(addOne, double, square)(3);
console.log(result); // 64

const capitalize = (str: string) => str.toUpperCase();
const addExclamation = (str: string) => str + "!";
const reverse = (str: string) => str.split("").reverse().join("");

const result2 = pipe<string, string>(
  capitalize,
  addExclamation,
  reverse
)("hello");
console.log(result2); //  !OLLEH
```

`sigil`

```ts
const capitalizedWords = sigil(/([A-Z]\w+)/g, "Hello World! This Is A Test");
console.log(capitalizedWords); //  ['Hello', 'World', 'This', 'Is', 'Test']
```

`unless`

```ts
const person = {
  name: "John",
  canVote: false,
  age: 30,
};

unless(person.age < 18, () => {
  person.canVote = true;
});

console.log(person); // Output: { name: "John", age: 30, canVote: true }
```

We offer a lot of utility functions to make your life easier. 
Check out the [documentation](https://extcy.js.org) for more information.

© Extcy 2022, [MIT Licence](/LICENSE), by [@vKxni](https://github.com/vKxni).
