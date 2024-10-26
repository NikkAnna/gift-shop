import './index.css';

import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import App from '../src/components/app/app';
import store from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <div className='wave wave1' />
        <div className='wave wave2' />
        <div className='wave wave3' />
        <div className='wave wave4' />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
