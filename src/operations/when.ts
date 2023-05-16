export function when<T, R>(
  value: T,
  ...patterns: [(val: T) => boolean, (val: T) => R][]
): R | undefined {
  for (let i = 0; i < patterns.length; i++) {
    const [predicate, callback] = patterns[i];
    if (predicate(value)) {
      return callback(value);
    }
  }

  return undefined;
}
