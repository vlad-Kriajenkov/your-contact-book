import { IconButton,  TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {
  ListContatcts,
  ItemContatct,
  Wrapper,
  NameContatct,
  NumberContatct,
  Container,
  Title,
} from './ListContact.styled';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deletContact, getAllContact } from 'redux/contatc/contact-operation';
import { selectorContacts } from 'redux/contatc/contact-selector';
import ModalContact from 'page/Phonebook/Modal/Modal';



const ListContact = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const [open, setOpen] =  useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  const visibelContact = contacts?.filter(({ name }) => {
    return name.toLowerCase().includes(filter);
  });

  const handlerChange = e => {
    setFilter(e.target.value);
  };

  const onDeletContact = id => dispatch(deletContact(id));
  return (
    <Container>
      <Title>Contacts</Title>

      <TextField
        id="filter"
        type="text"
        fullWidth
        label="Find contacts by name"
        variant="filled"
        required
        onChange={handlerChange}
        value={filter}
        name="filter"
      />
      <ListContatcts>
        {visibelContact?.length === 0
          ? `You don't have any contact 😓`
          : visibelContact?.map(({ id, name, number }) => {
              return (
                <ItemContatct key={id}>
                  <Wrapper>
                    <NameContatct>{name}:</NameContatct>
                    <NumberContatct>{number}</NumberContatct>
                  </Wrapper>
                  <div>
                    <IconButton aria-label="edit" onClick={handleOpen}>
                      <EditIcon sx={{ width: 24, height: 24 }} />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => onDeletContact(id)}
                    >
                      <DeleteIcon sx={{ width: 24, height: 24 }} />
                    </IconButton>
                  </div>
                  <ModalContact handleClose={handleClose} open={open} id={id} oldName={name} oldNumber={number}/>
                </ItemContatct>
                
              );
            })}
      </ListContatcts>
     
    </Container>
  );
};

export default ListContact;
