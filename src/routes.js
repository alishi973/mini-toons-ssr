import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Movies'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/video/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Movie'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
