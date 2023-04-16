import { formAnatomy } from '@chakra-ui/anatomy'

const activeLabelStyles = {
  transform: 'translateY(-18px) translateX(8px)',
  color: 'black',
  top: '19px', // Initial 11px + 8px for my: 2 in initial state
  fontSize: '12px',
  lineHeight: '16px',
}

export const Form = {
  parts: formAnatomy.keys,
  baseStyle: {},
  variants: {
    floating: {
      container: {
        // You're ready to type in the input field
        'input:focus, .chakra-select__wrapper + label[data-focus]': {
          paddingBottom: '8px',
        },
        'input:focus + label, .chakra-select__wrapper + label[data-focus]': {
          ...activeLabelStyles,
        },
        // If there's text in the field
        'input:not(:placeholder-shown) + label, label.hasValue': {
          ...activeLabelStyles,
        },
        // If there's text in the field but you're not focused on it
        'input:not(:placeholder-shown):not(:focus) + label,  label.hasValue': {
          color: 'gray.40',
        },
        // If there's text in the field
        'input:not(:placeholder-shown), select.hasValue': {
          paddingBottom: '8px',
        },
        label: {
          top: '11px', // Based off 64px default height of input
          left: 0,
          zIndex: 0,
          position: 'absolute',
          color: 'gray.40',
          mx: 3,
          my: 2,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
        },
      },
    },
  },
}
