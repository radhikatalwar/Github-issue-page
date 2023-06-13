import { Box, Divider, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { styles } from "./styles";
import { redirectPages } from "../../common/constants/data";

const Footer = () => {
  return (
    <>
      <Box className="last-heading" sx={styles.lastHeading}>
        <LightbulbOutlinedIcon />
        <Typography component="span">ProTip!</Typography>
        <Typography component="span">
          What's not been updated in a month
        </Typography>
      </Box>
      <Divider sx={styles.divider} />
      <Box className="redirect-container" sx={styles.redirectContainer}>
        {redirectPages.map((page) => {
          return <Typography key={page}>{page}</Typography>;
        })}
      </Box>
    </>
  );
};

export default Footer;
