import { getPalette } from './palette';

const palette = getPalette('dark');

const components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      size: 'small',
    },

    variants: [
      {
        props: { variant: 'logcop' },
        style: {
          backgroundColor: palette.secondary.main,
          borderRadius: '10px',
          padding: '.2rem 1rem',
          color: 'black',
          '&:hover': {
            backgroundColor: palette.secondary.medium,
          },
        },
      },
    ],

    styleOverrides: {
      outlined: {
        backgroundColor: 'transparent',
        borderRadius: '10px',
        borderColor: palette.neutral.light,
        padding: '.3rem 1rem',
        color: palette.neutral.light,
        '&:hover': {
          backgroundColor: palette.neutral.medium,
        },
      },
    },
  },

  MuiSelect: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
      notched: false,
    },
    styleOverrides: {
      root: {
        fontSize: '1rem',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.neutral.medium,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.neutral.medium,
        },
      },
    },
  },

  MuiDataGrid: {
    variants: [
      {
        props: { variant: 'expandedTable' },
        style: {
          '.MuiDataGrid-cell': {
            fontSize: '1.2rem',
          },
          '.MuiDataGrid-columnHeaderTitle': {
            fontSize: '1.5rem',
          },
        },
      },
    ],
    // styleOverrides: {
    //   cell: {
    //     fontSize: '0.875rem',
    //   },
    //   editInputCell: {
    //     fontSize: '0.875rem',
    //   },
    // },
  },
};

export default components;
