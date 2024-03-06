import { Box, CircularProgress } from "@mui/material";

const CircularLoader: React.FC = () => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <CircularProgress />
    </Box>
  );
  
  export default CircularLoader;