import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../HomePage'));
const Register = lazy(() => import('../Register'));
const ViewPage = lazy(() => import('../ViewPage'));


export const navigationRouts = [
  {
    name: 'Home',
    path: '/home',
    component: <Home />
  },
  {
    name: 'Register',
    path: '/',
    component: <Register />
  },
  {
    name: 'Register',
    path: '/view',
    component: <ViewPage />
  }
];

export default {
  navigationRouts
};
