import { getEnvVariables, validateEnvVariables } from '@pack/shared/src/helpers/config/env';

import { CONFIG_ENV_VAR_NAMES } from '@/src/common/const/config';

import { app } from './app';

const main = (): void => {
  validateEnvVariables(Object.values(CONFIG_ENV_VAR_NAMES));

  const [SERVER_PORT, SERVER_HOST] = getEnvVariables(
    CONFIG_ENV_VAR_NAMES.SERVER_PORT,
    CONFIG_ENV_VAR_NAMES.SERVER_HOST,
  );

  app.listen(Number(SERVER_PORT), SERVER_HOST, (error: unknown) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    else {
      // eslint-disable-next-line no-console
      console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
    }
  });
};

main();
