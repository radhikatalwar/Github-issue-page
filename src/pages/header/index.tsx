import { styles } from "./styles";
import { Box, Typography } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ForkRightOutlinedIcon from "@mui/icons-material/ForkRightOutlined";
import { tabData } from "../../common/constants/data";

const Header = () => {
  return (
    <Box component="header" className="header" sx={styles.header}>
      <Box className="main-container" sx={styles.mainContainer}>
        <Box className="main-left" sx={styles.leftContainer}>
          <Box sx={styles.headContainer}>
            <BookOutlinedIcon />
            <Typography>facebook / </Typography>
            <Typography>react</Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography>Public</Typography>
          </Box>
        </Box>
        <Box className="main-right" sx={styles.rightContainer}>
          <Box className="link-container" sx={styles.rightLinkContainer}>
            <NotificationsOutlinedIcon />
            <Typography>Notifications</Typography>
          </Box>
          <Box className="link-container" sx={styles.rightLinkContainer}>
            <StarBorderOutlinedIcon />
            <Typography>Star</Typography>
            <Box className="count-container" sx={styles.countContainer}>
              <Typography>175k</Typography>
            </Box>
          </Box>
          <Box className="link-container" sx={styles.rightLinkContainer}>
            <ForkRightOutlinedIcon />
            <Typography>Fork</Typography>
            <Box className="count-container" sx={styles.countContainer}>
              <Typography>35.3k</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="tab-container" sx={styles.tabContainer}>
        {tabData &&
          tabData.map((tab, index) => {
            const { Icon, title } = tab;
            const key = `tab-${index + 1}`;
            return (
              <Box key={key} className="tab-box" sx={styles.tab}>
                <Icon />
                <Typography>{title}</Typography>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Header;
