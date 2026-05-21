import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';

import { appInitialiser } from './app/boot';
import { GlobalResetCSS } from './app/styles/reset';

appInitialiser();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalResetCSS />
    <App />
  </StrictMode>,
);
