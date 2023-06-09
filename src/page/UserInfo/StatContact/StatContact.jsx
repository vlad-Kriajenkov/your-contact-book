import { useSelector } from 'react-redux';
import {
  Container,
  WrapperUser,
  AvatarMui,
  FlexBox,
  Name,
  Email,
  ListStat,
  ItemStat,
  ItemStatName,
  ItemStatInfo
} from './StatContact.styled';
import { selectorEmail, selectorName } from 'redux/auth/auth-selector';

const StatContact = () => {
  const name = useSelector(selectorName);
  const email = useSelector(selectorEmail);
  return (
    <Container>
      <WrapperUser>
        <AvatarMui sx={{ width: 70, height: 70 }} />
        <FlexBox>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </FlexBox>
      </WrapperUser>

      <ListStat>
        <ItemStat>
          <ItemStatName>Followers</ItemStatName>
          <ItemStatInfo>3,232</ItemStatInfo>
        </ItemStat>
        <ItemStat>
          <ItemStatName>Contacts</ItemStatName>
          <ItemStatInfo>10</ItemStatInfo>
        </ItemStat>
        <ItemStat>
          <ItemStatName>Likes</ItemStatName>
          <ItemStatInfo>+3,232</ItemStatInfo>
        </ItemStat>
      </ListStat>
    </Container>
  );
};
export default StatContact;
