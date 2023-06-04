import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#3498DB',
      200: '#007cbd',
      300: '#004079',
    },
    accent: {
      100: '#2ECC71',
      200: '#006a18',
    },
    text: {
      100: '#333333',
      200: '#5c5c5c',
    },
    bg: {
      100: '#F5F7FA',
      200: '#ebedf0',
      300: '#c2c4c7',
    },
  },
});

export default theme;
