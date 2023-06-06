import { Avatar, Box, Typography } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { styles } from "./styles";

const ErrorList = ({ error }: any) => {
  return (
    <Box sx={styles.errorContainer}>
      <Box sx={styles.errorLeftContainer}>
        <AdjustIcon sx={styles.icon} />
        <Box sx={styles.errorTitleContainer}>
          <Box sx={styles.leftContainer}>
            <Typography sx={styles.title}>{error.title}</Typography>
            <Box sx={styles.labelContainer}>
              {error.labels.map((label: any) => {
                return (
                  <Box
                    key={label.id}
                    sx={{ ...styles.label, backgroundColor: `#${label.color}` }}
                  >
                    <Typography>{label.name}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box>
            <Typography
              sx={styles.subTitle}
            >{`${error.id} opened by ${error?.user?.login}`}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.errorRightContainer}>
        {error.user ? (
          <Box>
            <Avatar sx={styles.avatar} src={error?.user?.avatar_url} />
          </Box>
        ) : (
          <Box></Box>
        )}
        {error.comments ? (
          <Box sx={styles.rightContainer}>
            <ChatBubbleOutlineIcon sx={styles.messageIcon} />
            <Typography sx={styles.comment}>{error.comments}</Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default ErrorList;
