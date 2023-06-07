import { COLORS } from "../common/constants";
import theme from "../common/utils/theme";

export const styles = {
  errorContainer: {
    border: `1px solid ${COLORS.gray}`,
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(500)]: {
      flexWrap: "wrap",
      gap: "10px",
      minWidth: "20%",
      width: "100%",
    },
  },
  errorListing: {
    width: "80%",
    margin: "30px auto",
    maxHeight: "720px",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down(500)]: {
      width: "90%",
    },
  },
  innerContainer: {
    borderRadius: "6px",
    height: "100%",
    backgroundColor: COLORS.white,
  },
};
