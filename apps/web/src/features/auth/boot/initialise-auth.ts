import { store } from '@/app/store/store';

import { setIsLoading } from '../store/auth.slice';

export const initialiseAuth = (): void => {
  // eslint-disable-next-line no-console
  console.log('initialising auth');
  store.dispatch(setIsLoading(false));
};
