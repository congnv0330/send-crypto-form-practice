import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './main.css';

createRoot(document.getElementById('__app') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
