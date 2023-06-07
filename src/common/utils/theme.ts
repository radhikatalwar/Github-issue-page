import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { COLORS } from "../constants";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

export default theme;
