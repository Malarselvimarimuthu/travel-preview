import { lazy } from 'react';

// Importing routes
const Home = lazy(() => import('../HomePage/index'));
// const OnlineOrder = lazy(() => import('../Pages/OnlineOrder'));


export const navigationRouts = [
  {
    name: 'Home',
    path: '/',
    component: <Home />
  }
//   {
//     name: 'OnlineOrder',
//     path: '/onlineorder',
//     component: <OnlineOrder />
//   }
];

export default {
  navigationRouts
};
