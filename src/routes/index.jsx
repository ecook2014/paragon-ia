import loadable from '@loadable/component';

const WatercraftPositionReport = loadable(() => import('./WatercraftPositionReport'));

const routes = [
  {
    path: '/',
    element: <WatercraftPositionReport />,
  },
];

export default routes;
