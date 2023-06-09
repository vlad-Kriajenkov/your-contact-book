import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';
import { InputBox ,style, Title } from './Modal.styled';
import { CustomButton } from 'components/CustomButton/CustomButton';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updated } from 'redux/contatc/contact-operation';

const ModalContact = ({ handleClose, open, id, oldName, oldNumber }) => {
 
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);
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
 
    dispatch(updated({ id, name, number }));
    handleClose()

  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Title>Edit Contact</Title>
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
      </Box>
    </Modal>
  );
};
export default ModalContact;
