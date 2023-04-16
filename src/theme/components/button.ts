/* button */

export const Button = {
  baseStyle: {
    fontFamily: `'Helvetica Now Display', sans-serif`,
    height: 'auto',
  },
  sizes: {
    lg: {
      fontSize: '17px',
      lineHeight: '24px',
      px: '24px',
      py: '20px',
    },
    md: {
      fontSize: '17px',
      lineHeight: '24px',
      px: '20px',
      py: '16px',
    },
    sm: {
      fontSize: '14px',
      lineHeight: '20px',
      px: '16px',
      py: '10px',
    },
    xs: {
      fontSize: '14px',
      lineHeight: '20px',
      px: '12px',
      py: '6px',
    },
  },
  variants: {
    primary: {
      border: '2px solid transparent',
      bg: 'navy.100',
      color: 'white',
      '&:hover': {
        bg: 'navy.80',
      },
      '&:active': {
        bg: 'navy.60',
      },
      '&:focus': {
        borderColor: '#6185F2',
      },
    },
    StartNow: {
      bg: '#F65A00',
      border: '2px solid transparent',
      color: 'white',
      '&:hover': {
        bg: 'navy.80',
      },
      '&:active': {
        bg: 'navy.60',
      },
      '&:focus': {
        borderColor: '#6185F2',
      },
    },
    white: {
      bg: 'white',
      boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },

    active: {
      bg: 'black.5',
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
    text: {
      '&:hover': {
        bg: 'black.5',
      },
      '&:focus': {
        bg: 'black.10',
      },
      '&:disabled': {
        opacity: '70%',
      },
    },
  },
}
