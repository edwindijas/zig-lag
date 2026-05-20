import { appBootItems } from './boot-items';

export const appInitialiser = (): void => {
  appBootItems.forEach((bootItem: () => void) => bootItem());
};
