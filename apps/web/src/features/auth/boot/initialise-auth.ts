import { store } from '@/app/store/store';

import { getUser } from '../api';
import { setIsLoading, setUser } from '../store/auth.slice';

export const initialiseAuth = async (): Promise<void> => {
  const user = await getUser();
  store.dispatch(setUser(user));
  store.dispatch(setIsLoading(false));
};
