 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Link, Nav, LogOutBtn } from './HomeBar.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';

const HomeBar = () => {
  const dispatch = useDispatch()
  const onLogout =()=>{
    dispatch(logout())
  }
  return (
    <Box>
      <Nav>
        <Link to="userInfo">
          <PersonIcon /> <p>USer Info</p> 
        </Link>
        <Link to="phonebook"><ContactPhoneIcon/> <p>Phonebook</p> </Link>
 
      </Nav>
      <LogOutBtn onClick={onLogout} variant="outlined" startIcon={<LogoutIcon />}>
        Log out
      </LogOutBtn>
    </Box>
  );
};
export default HomeBar;
