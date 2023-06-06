import { Box, Divider, Typography } from "@mui/material";
import ErrorList from "./errorList";
import useErrorHelper from "./helper";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { styles } from "./styles";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ForkRightOutlinedIcon from "@mui/icons-material/ForkRightOutlined";

const Home = () => {
  const { errors, handleScroll } = useErrorHelper();
  const redirectPages = [
    "Terms",
    "Privacy",
    "Security",
    "Status",
    "Docs",
    "Contact Github",
    "Pricing",
    "API",
    "Training",
    "Blog",
    "About",
  ];

  return (
    <Box sx={styles.innerContainer}>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.leftContainer}>
          <Box sx={styles.headContainer}>
            <BookOutlinedIcon />
            <Typography>facebook / react</Typography>
          </Box>
          <Box sx={styles.linkContainer}>
            <Typography>Public</Typography>
          </Box>
        </Box>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.rightLinkContainer}>
            <NotificationsOutlinedIcon />
            <Typography>Notifications</Typography>
          </Box>
          <Box sx={styles.rightLinkContainer}>
            <StarBorderOutlinedIcon />
            <Typography>Star</Typography>
          </Box>
          <Box sx={styles.rightLinkContainer}>
            <ForkRightOutlinedIcon />
            <Typography>Fork</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.errorListing} onScroll={handleScroll}>
        {errors.map((error) => {
          return <ErrorList error={error} />;
        })}
      </Box>
      <Box sx={styles.lastHeading}>
        <LightbulbOutlinedIcon />
        <Typography component="span">ProTip!</Typography>
        <Typography component="span">
          What's not been updated in a month
        </Typography>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.redirectContainer}>
        {redirectPages.map((page) => {
          return <Typography>{page}</Typography>;
        })}
      </Box>
    </Box>
  );
};

export default Home;
