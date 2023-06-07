import { Grid, TextField } from '@mui/material';
import {
  Title,
  ContainerForm,
  InputBox,
  FlexWrapper,
} from './Authorization.styled';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';

export const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
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

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <FlexWrapper>
      <ContainerForm maxWidth="xs">
        <Title>Authorization</Title>
        <form onSubmit={onSubmit}>
          <InputBox container rowSpacing={2} columnSpacing={{ md: 2 }}>
            <Grid item xs={12}>
              <TextField
                id="email"
                type="email"
                fullWidth
                label="Enter email"
                variant="filled"
                required
                onChange={handlerChange}
                value={email}
                name="email"
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
                onChange={handlerChange}
                value={password}
                name="password"
              />
            </Grid>
          </InputBox>
          <CustomButton type="submit" text={'Log in'} />
        </form>
      </ContainerForm>
    </FlexWrapper>
  );
};
