import { Grid, TextField } from '@mui/material';
import {
  Title,
  ContainerForm,
  InputBox,
  FlexWrapper,
} from './Registration.styled';
import { CustomButton } from 'components/CustomButton/CustomButton';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/auth-operation";
export const Registration = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const onSubmit = async e => {
    e.preventDefault();
    dispatch(register({ name, email, password}))
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <FlexWrapper>
      <ContainerForm maxWidth="xs">
        <Title>Registration</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={6}>
              <TextField
                id="email"
                type="email"
                fullWidth
                label="Enter email"
                variant="filled"
                required
                name="email"
                value={email}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="name"
                type="text"
                fullWidth
                label="Enter user name"
                variant="filled"
                required
                name="name"
                value={name}
                onChange={handelChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                type="password"
                fullWidth
                label="Enter password"
                variant="filled"
                required
                name="password"
                value={password}
                onChange={handelChange}
              />
            </Grid>
          </InputBox>
          <CustomButton text={'Add contact'} />
        </form>
      </ContainerForm>
    </FlexWrapper>
  );
};
