import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./loader.styles";

const Loader = () => {
  const { loading } = useAppSelector((state) => state.globalcontent);

  return (
    <Backdrop sx={styles.loaderContainer} open={loading}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    </Backdrop>
  );
};

export default Loader;
