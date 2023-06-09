import { FlexBox } from './UserInfo.styled';
import StatContact from './StatContact/StatContact';
import UploadStats from './UploadStats/UploadStats';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const UserInfo = () => {
  return (
    <>
      <FlexBox>
        <StatContact />
        <UploadStats />
      </FlexBox>

      <TransactionHistory/>
    </>
  );
};
export default UserInfo;
