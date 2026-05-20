import { Provider } from 'react-redux';

import { store } from './store/store';

import type { PropsWithChildren, ReactElement } from 'react';

export const AppWithProviders = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Provider store={store}>
      { children}
    </Provider>
  );
};
