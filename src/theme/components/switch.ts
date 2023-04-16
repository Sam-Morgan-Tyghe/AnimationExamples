export const Switch = {
  baseStyle: {
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    thumb: {
      width: '30px',
      height: '32px',
      bg: 'gray.20',
      _checked: {
        bg: 'white',
        transform: 'translateX(22px)', // total width of track - thumb width 🧠
      },
    },
    track: {
      width: '52px',
      height: '32px',
      bg: 'white',
      borderWidth: '1px',
      borderColor: 'gray.20',
      padding: 0,
      _checked: {
        bg: 'black',
        borderWidth: '1px',
        borderColor: 'black',
      },
    },
  },
}
