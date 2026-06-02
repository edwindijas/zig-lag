import { store } from '@/app/store/store';

import { getUser } from '../api';
import { setIsLoading } from '../store/auth.slice';

export const initialiseAuth = async (): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log('initialising auth');

  const user = await getUser();

  // eslint-disable-next-line no-console
  console.log('fetched user', user);

  store.dispatch(setIsLoading(false));
};
