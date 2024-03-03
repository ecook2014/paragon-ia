import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
