import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import routes from './routes';
import theme from './styles/theme';

const router = createBrowserRouter(routes, {
  basename: '/paragon-ia',
});


function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
