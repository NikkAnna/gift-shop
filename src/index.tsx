import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../src/components/app/app';
import React from 'react';


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
