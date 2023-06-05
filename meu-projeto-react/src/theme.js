import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: "#B3D9E6",
      200: "#96bbc8",
      300: "#547984"
    },
    accent: {
      100: "#66B2D6",
      200: "#005676"
    },
    text: {
      100: "#333333",
      200: "#5c5c5c"
    },
    bg: {
      100: "#E6F2F8",
      200: "#dce8ee",
      300: "#b4bfc5"
    }
  }
});

export default theme;
