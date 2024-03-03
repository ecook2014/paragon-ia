const dark = {
  grey: {
    100: '#e0e0e0',
    200: '#c2c2c2',
    300: '#CECACA',
    400: '#858585',
    500: '#666666',
    600: '#525252',
    700: '#3d3d3d',
    800: '#292929',
    900: '#141414',
  },

  primary: {
    400: '#24d1c6', // USED Side Nav background, Box fills
    500: '#6b6f75', // USED - Main background
    600: '#111111',
    900: '#000000',
  },

  yellowAccent: {
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047', // USED in map grid popup title icon
    400: '#facc15', // USED Subheader in commodities pages +  map grid popup
    500: '#eab308', // Green chart accent
    600: '#ffd530', // USED Side nav accent, Card icon accent
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  greenAccent: {
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80', // Subheader
    500: '#22c55e', // Green chart accent
    600: '#16a34a', // Card icon accent
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  redAccent: {
    100: '#f8dcdb',
    200: '#e99592', // Red chart accent
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f',
  },
  blueAccent: {
    100: '#d3d7e1',
    200: '#394d78',
    300: '#243A6A',
    400: '#20345f',
    500: '#243A6A',
    600: '#1c2e54',
    700: '#19294b',
    800: '#162443',
    900: '#151632',
  },
};

const palette = {
  primary: {
    main: dark.primary[500],
  },
  secondary: {
    dark: dark.yellowAccent[900],
    medium: dark.yellowAccent[500],
    main: dark.yellowAccent[400],
    light: dark.yellowAccent[300],
  },
  neutral: {
    dark: dark.grey[700],
    main: dark.grey[500],
    medium: dark.grey[400],
    light: dark.grey[100],
  },
  background: {
    secondary: dark.primary[400],
    default: dark.primary[500],
    dark: dark.primary[900],
    paper: dark.primary[600],
  },
  blueAccent: {
    dark: dark.blueAccent[900],
    main: dark.blueAccent[600],
    light: dark.blueAccent[300],
  },
  redAccent: {
    dark: dark.redAccent[700],
    main: dark.redAccent[500],
    light: dark.redAccent[200],
    bright: '#ff0000',
  },
  greenAccent: {
    dark: dark.greenAccent[900],
    main: dark.greenAccent[800],
    light: dark.greenAccent[600],
  },
};

const getPalette = () => ({
  mode: 'dark',
  ...palette,
});

const colors = { dark };

export { getPalette, colors };
