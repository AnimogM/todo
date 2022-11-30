import colors from "./chakra/colors";
import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors,
};

const theme = extendTheme(overrides);

export default theme;
