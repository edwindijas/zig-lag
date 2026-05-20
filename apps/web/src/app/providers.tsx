import type { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';

export const AppWithProviders = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Provider store={store}>
      { children}
    </Provider>
  );
};
