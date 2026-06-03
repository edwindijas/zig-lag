import { useDispatch } from 'react-redux';

import { useSignoutMutation } from '../queries/user';
import { setUser } from '../store/auth.slice';

export const useSignout = (): (() => Promise<void>) => {
  const { mutateAsync: signout } = useSignoutMutation();
  const dispatch = useDispatch();
  return async () => {
    await signout();
    dispatch(setUser(null));
  };
};
