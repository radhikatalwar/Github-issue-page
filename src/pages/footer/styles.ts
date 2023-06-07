import { COLORS } from "../../common/constants";
import theme from "../../common/utils/theme";

export const styles = {
  lastHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span:nth-of-type(1)": {
      font: "normal normal 700 16px/18px Sans-serif",
      marginRight: "5px",
    },
    "& span:nth-of-type(2)": {
      font: "normal normal 500 16px/18px Sans-serif",
    },
    "& svg": { height: "20px", width: "20px", marginRight: "10px" },
  },
  divider: {
    width: "90%",
    backgroundColor: COLORS.lightGrey,
    margin: "25px auto",
  },
  redirectContainer: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    "& p": { color: COLORS.primary, marginBottom: "30px" },
    [theme.breakpoints.down(500)]: {
      flexWrap: "wrap",
      gap: "10px",
      minWidth: "20%",
      "& p": { color: COLORS.primary, marginBottom: "10px" },
    },
  },
};
