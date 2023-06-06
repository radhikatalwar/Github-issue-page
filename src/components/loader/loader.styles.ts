import { Theme } from "@mui/material";
import { COLORS } from "../../common/constants";

const styles = {
  loaderContainer: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    background: `${COLORS.black}4D`,
  },
  loaderImage: {
    width: "300px",
    margin: "0 auto",
  },
};

export default styles;
