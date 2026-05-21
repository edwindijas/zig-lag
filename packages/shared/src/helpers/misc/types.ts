type ArrayToEnum<T extends readonly string[]> = {
  [K in T[number]]: K;
};

type ArrayToMirrorLowerCase<T extends readonly string[]> = {
  [K in T[number]]: Lowercase<K>;
};

export const arrayToEnum = <T extends readonly string[]>(
  arr: T,
): ArrayToEnum<T> => {
  return Object.fromEntries(arr.map((key: string) => [key, key])) as ArrayToEnum<T>;
};

export const arrayToMirrorLowercase = <T extends readonly string[]>(
  arr: T,
): ArrayToMirrorLowerCase<T> => {
  return Object.fromEntries(
    arr.map((key: string) => [key, key.toLocaleLowerCase()]),
  ) as ArrayToMirrorLowerCase<T>;
};
