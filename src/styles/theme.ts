import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  fonts: {
    heading: `'DM Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};
const theme = extendTheme(customTheme);

export default theme;
