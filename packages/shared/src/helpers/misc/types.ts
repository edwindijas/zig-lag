type ArrayToEnum<T extends readonly string[]> = {
  [K in T[number]]: K;
};

type ArrayToMirrorLowerCase<T extends readonly string[]> = {
  [K in T[number]]: Lowercase<K>;
};

/* export const arrayToEnum = <T extends readonly string[]>(
  arr: T,
): ArrayToEnum<T> => {
  return Object.fromEntries(arr.map((key: string) => [key, key])) as ArrayToEnum<T>;
}; */

export const arrayToEnum = <T extends readonly string[]>(arr: T): ArrayToEnum<T> => {
  return Object.fromEntries(
    arr.map(key => [key, key]),
  ) as { readonly [K in T[number]]: K };
};

export const arrayToMirrorLowercase = <T extends readonly string[]>(
  arr: T,
): ArrayToMirrorLowerCase<T> => {
  return Object.fromEntries(
    arr.map((key: string) => [key, key.toLocaleLowerCase()]),
  ) as ArrayToMirrorLowerCase<T>;
};
