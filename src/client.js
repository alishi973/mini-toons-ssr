import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import ContextProvider from './ContextProvider/Context';
import routes from './routes';
import './scss/export.scss';

ensureReady(routes).then((data) =>
  hydrate(
    <ContextProvider>
      <BrowserRouter>
        <After data={data} routes={routes} />
      </BrowserRouter>
    </ContextProvider>,
    document.getElementById('root'),
  ),
);

if (module.hot) {
  module.hot.accept();
}
