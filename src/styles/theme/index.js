import { createTheme } from '@mui/material/styles';

import { getPalette, colors } from './palette';
import typography from './typography';
import components from './overrides';

export const tokens = () => ({
  ...colors.dark,
});

export const themeSettings = () => ({
  palette: getPalette(),
  typography,
  components,
});

export default createTheme(themeSettings());
