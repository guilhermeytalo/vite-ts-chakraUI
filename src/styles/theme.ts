import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    primary: '#5BB5A2',
    black: '#1A191E',
    white: '#FFFFFF',
    grey:  '#1A191E80'
  },
};
const theme = extendTheme(customTheme);

export default theme;
