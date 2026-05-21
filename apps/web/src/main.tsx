import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/App';

import { appInitialiser } from './app/boot';

appInitialiser();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
