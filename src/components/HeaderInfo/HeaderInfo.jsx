import { useSelector } from 'react-redux';
import { Box, BoxCont, Text, AvatarMui,WrapperDate } from './HeaderInfo.styled';
import { selectorEmail, selectorName } from 'redux/auth/auth-selector';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const HeaderInfo = () => {
  const name = useSelector(selectorName);
  const email = useSelector(selectorEmail);
  return (
    <Box>
      <Text>Hello, {name}</Text>
      <BoxCont>
        <WrapperDate>
          <CalendarMonthIcon />
          <div>{moment().format('LL')}</div>
        </WrapperDate>

        <AvatarMui sx={{ width: 32, height: 32 }} />
        <Text>{email}</Text>
      </BoxCont>
    </Box>
  );
};
export default HeaderInfo;
