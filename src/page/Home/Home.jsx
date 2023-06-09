import HomeBar from 'components/HomeBar/HomeBar';
import { Outlet } from 'react-router-dom';
import { Box } from './Home.styled';
import { Container } from '@mui/material';
import HeaderInfo from 'components/HeaderInfo/HeaderInfo';
import { useSelector } from 'react-redux';
import { selecrotFetching } from 'redux/auth/auth-selector';

const Home = () => {
  const isFetchingCurrentUser = useSelector(selecrotFetching);
  return (
    <Box>
      <HomeBar />
      <Container maxWidth="xl">
        {!isFetchingCurrentUser && (
          <>
          
            <HeaderInfo />
            <Outlet />
          </>
        )}
      </Container>
    </Box>
  );
};
export default Home;
