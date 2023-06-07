import { COLORS } from "../../common/constants";
import theme from "../../common/utils/theme";

export const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    padding: "15px 5%",
    backgroundColor: COLORS.gray,
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
    },
  },
  header: { backgroundColor: COLORS.gray },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(500)]: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      alignItems: "flex-start",
    },
  },
  rightContainer: { display: "flex", alignItems: "center", gap: "20px" },
  linkContainer: {
    border: `1px solid ${COLORS.black}`,
    borderRadius: "10px",
    marginLeft: "10px",
    padding: "0 5px",
    color: COLORS.black,
    "& p": {
      font: "normal normal 500 12px/18px Sans-serif",
    },
  },
  rightLinkContainer: {
    border: `1px solid ${COLORS.black}`,
    borderRadius: "5px",
    marginLeft: "10px",
    padding: "2px 10px",
    color: COLORS.black,
    display: "flex",
    alignItems: "center",
    "& svg": { height: "20px", width: "20px", marginRight: "5px" },
    "& p": {
      font: "normal normal 500 14px/18px Sans-serif",
      color: COLORS.black,
    },
    [theme.breakpoints.down(500)]: {
      marginLeft: 0,
    },
  },
  tabContainer: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
    flexWrap: "wrap",
    [theme.breakpoints.down(500)]: {
      width: "100%",
      padding: "10px 20px",
      gap: "10px 20px",
    },
  },
  tab: {
    display: "flex",
    alignItems: "center",
    margin: "0 20px 15px 0",
    "& svg": { height: "20px", width: "20px", marginRight: "5px" },
    "& p": {
      font: "normal normal 500 15px/18px Sans-serif",
      color: COLORS.black,
    },
    [theme.breakpoints.down(500)]: {
      margin: "0 20px 0 0",
    },
  },
  count: {
    padding: "5px",
    border: `1px solid ${COLORS.gray}`,
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    "& svg": { height: "20px", width: "20px", marginRight: "5px" },
    "& p": {
      letterSpacing: "-0.19px",
      color: COLORS.primary,
    },
    "& p:nth-of-type(1)": {
      font: "normal normal 500 18px/18px Sans-serif",
    },
    "& p:nth-of-type(2)": {
      font: "normal normal 700 18px/18px Sans-serif",
      paddingLeft: "5px",
    },
  },
  countContainer: {
    paddingLeft: "10px",
  },
};
