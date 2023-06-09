import { Grid, TextField } from '@mui/material';
import { Title, ContainerForm, InputBox } from './AddContact.styled';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contatc/contact-operation';

const AddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const dispatch = useDispatch();

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <ContainerForm>
      <Title>Phonebook</Title>
      <form onSubmit={onSubmit}>
        <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
          <Grid item xs={12}>
            <TextField
              id="name"
              type="name"
              fullWidth
              label="Enter name"
              variant="filled"
              required
              onChange={handlerChange}
              value={name}
              name="name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="number"
              type="phone"
              fullWidth
              label="Enter number"
              variant="filled"
              required
              onChange={handlerChange}
              value={number}
              name="number"
            />
          </Grid>
        </InputBox>
        <CustomButton type="submit" text={'Add Contact'} />
      </form>
    </ContainerForm>
  );
};

export default AddContact;
