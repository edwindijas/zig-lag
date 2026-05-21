export const getEnvVariable = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`The system is missing key ${key}`);
  }

  return process.env[key];
};

export const getEnvVariables = (...keys: string[]): string[] => {
  return keys.map((key: string) => getEnvVariable(key));
};

export const validateEnvVariables = (keys: string[]): void => {
  getEnvVariables(...keys);
};
