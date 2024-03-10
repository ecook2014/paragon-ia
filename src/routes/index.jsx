import loadable from '@loadable/component';
import { Navigate } from 'react-router-dom';

const Splash = loadable(() => import('../layouts/Splash'));
const GeneralErrorBoundary = loadable(() => import('../components/GeneralErrorBoundary'));
const Home = loadable(() => import('../routes/Home'));
const StrategyTester = loadable(() => import('../routes/StrategyTester'));
const About = loadable(() => import('../routes/About'));

const routes = [
  {
    path: '/',
    element: <Splash />,
    errorElement: <GeneralErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Navigate to="home" replace />,
        errorElement: <GeneralErrorBoundary />,
      },
      {
        path: 'home',
        element: <Home />,
        errorElement: <GeneralErrorBoundary />,
      },
      {
        path: 'strategy-tester',
        element: <StrategyTester />,
        errorElement: <GeneralErrorBoundary />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <GeneralErrorBoundary />,
      }
    ]
  },
];

export default routes;
