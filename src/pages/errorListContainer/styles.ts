import { COLORS } from "../../common/constants";
import theme from "../../common/utils/theme";

export const styles = {
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
  messageIcon: {
    paddingRight: "5px",
    color: COLORS.black,
    height: "20px",
    width: "20px",
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
  labelContainer: { display: "flex", flexWrap: "wrap" },
  title: { font: "normal normal 700 15px/24px Sans-serif" },
  label: {
    borderRadius: "10px",
    padding: "5px",
    margin: "0 5px",
    "& p": {
      font: "normal normal 700 12px/14px Sans-serif",
      letterSpacing: "-0.19px",
    },
  },
  icon: {
    color: COLORS.green,
    height: "20px",
    width: "20px",
    marginRight: "10px",
  },
  errorLeftContainer: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    [theme.breakpoints.down(500)]: {
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "10px",
      width: "100%",
    },
  },
  errorRightContainer: {
    display: "flex",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
  },
  errorTitleContainer: {},
  innerContainer: {
    borderRadius: "6px",
    height: "100%",
    backgroundColor: COLORS.white,
  },
  comment: {
    font: "normal normal 500 12px/14px Sans-serif",
    color: COLORS.black,
  },
  avatar: { height: "25px", width: "25px" },
  subTitle: {
    font: "normal normal 700 13px/15px Sans-serif",
    color: COLORS.dimgray,
  },
  count: {
    padding: "5px",
    border: `1px solid ${COLORS.gray}`,
  },
};
