import { COLORS } from "../common/constants";

export const styles = {
  errorContainer: {
    border: `1px solid ${COLORS.gray}`,
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageIcon: {
    paddingRight: "5px",
    color: COLORS.black,
    height: "20px",
    width: "20px",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    padding: "15px 5%",
    backgroundColor: COLORS.gray,
  },
  leftContainer: { display: "flex", alignItems: "center" },
  rightContainer: { display: "flex", alignItems: "center" },
  errorListing: {
    width: "80%",
    margin: "30px auto",
    maxHeight: "720px",
    overflow: "auto",
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
  errorLeftContainer: { display: "flex", alignItems: "center", width: "70%" },
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
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    "& svg": { height: "20px", width: "20px", marginRight: "5px" },
    "& p": {
      font: "normal normal 500 18px/18px Sans-serif",
      letterSpacing: "-0.19px",
      color: COLORS.primary,
    },
  },
  linkContainer: {
    border: `1px solid ${COLORS.gray}`,
    borderRadius: "10px",
    marginLeft: "10px",
    padding: "0 5px",
    color: COLORS.gray,
    "& p": {
      font: "normal normal 500 12px/18px Sans-serif",
    },
  },
  rightLinkContainer: {
    border: `1px solid ${COLORS.gray}`,
    borderRadius: "5px",
    marginLeft: "10px",
    padding: "2px 10px",
    color: COLORS.gray,
    display: "flex",
    alignItems: "center",
    "& svg": { height: "20px", width: "20px", marginRight: "5px" },
    "& p": {
      font: "normal normal 500 14px/18px Sans-serif",
      color: COLORS.black,
    },
  },
};
