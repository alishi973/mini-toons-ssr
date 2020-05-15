import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Movies'),
      Placeholder: () => <div>درحال بار گزاری</div>,
    }),
  },
  {
    path: '/video/:id',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Movie'),
      Placeholder: () => <div>درحال بار گزاری</div>,
    }),
  },
  {
    path: '/search',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Search'),
      Placeholder: () => <div>درحال بارگزاری</div>,
    }),
  },
  {
    path: '/profile',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Profile'),
      Placeholder: () => <div>درحال بارگزاری</div>,
    }),
  },
  {
    path: '/tag/:tagName',
    exact: true,
    component: asyncComponent({
      loader: () => import('./pages/Tag'),
      Placeholder: () => <div>درحال بارگزاری</div>,
    }),
  },
];
