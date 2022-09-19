/* This is importing the necessary modules for the app to run. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Context';

/* This is creating a root element for the app to render to. */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* This is rendering the app to the root element. */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>{<App />}</ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
