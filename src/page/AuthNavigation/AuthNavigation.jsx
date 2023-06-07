import { AuthBar } from 'components/AuthBar/AuthBar';
import { Outlet } from 'react-router-dom';
import { Box } from './AuthNavigation.styled';
export const AuthNavigation = () => {
  return (
    <Box>
      <AuthBar />
      <Outlet />
    </Box>
  );
};
