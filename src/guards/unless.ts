export function unless<T>(
  condition: boolean,
  callback: () => T
): T | undefined {
  if (!condition) {
    return callback();
  }
}
