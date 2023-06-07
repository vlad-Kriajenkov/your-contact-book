 
import { Box, Link } from './AuthBar.stuled';
export const AuthBar = () => {
  return (
    <Box>
      <Link to="/authorization"> Authorization</Link>
      <Link to="/registration">Registration</Link>
    </Box>
  );
};
