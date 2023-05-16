export function sigil(regex: RegExp, str: string): string[] {
  const matches = str.match(regex);
  if (!matches) return [];
  return matches.slice(1);
}
