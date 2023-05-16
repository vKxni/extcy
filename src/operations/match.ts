type Pattern<T> = {
  [K in keyof T]?: ((value: T[K]) => boolean) | Pattern<T[K]>;
};

export function match<T>(obj: T, pattern: Pattern<T>): boolean {
  const patternKeys = Object.keys(pattern);
  for (let i = 0; i < patternKeys.length; i++) {
    const key = patternKeys[i];
    if (pattern.hasOwnProperty(key)) {
      const value = obj[key as keyof T];
      const matcher = pattern[key as keyof T];

      switch (typeof matcher) {
        case "function":
          if (!matcher(value)) return false;
          break;

        case "object":
          if (!match(value, matcher)) return false;
          break;

        default:
          if (matcher !== value) return false;
          break;
      }
    }
  }

  return true;
}
