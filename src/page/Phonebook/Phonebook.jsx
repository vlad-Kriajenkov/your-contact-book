import AddContact from "./AddContact/AddContact";
import ListContact from "./ListContact/ListContact";
import { FlexBox } from "./Phonebook.styled";

const PhoneBook = () => {
  return (
    <FlexBox>
      <AddContact/>
      <ListContact/>
    </FlexBox>
  );
};
export default PhoneBook;
