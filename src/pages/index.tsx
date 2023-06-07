import { Box } from "@mui/material";
import ErrorList from "./errorListContainer";
import useErrorHelper from "./helper";
import { styles } from "./styles";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  const { errors, handleScroll } = useErrorHelper();

  return (
    <Box className="inner-container" sx={styles.innerContainer}>
      <Header />
      <Box
        className="error-listing"
        sx={styles.errorListing}
        onScroll={handleScroll}
      >
        {errors.map((error) => {
          return <ErrorList error={error} />;
        })}
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
