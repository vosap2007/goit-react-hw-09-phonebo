import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from "../redux/contacts/contacts-operations";
import styles from '../css/PhoneBook.module.css';
import contactsSelectors from "../redux/contacts/contacts-selectors";
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

function Input ({updateData}) {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const [error, setError] = useState(true);

const contacts = useSelector(contactsSelectors.getVisible);
const dispatch = useDispatch();
  
const onAddContact = ({ name, number }) => dispatch(contactsOperations.addContacts({ name, number }));

const handleInputChangeName = e => {
  setName(e.currentTarget.value);
};

const handleInputChangeNumber = e => {
  setNumber(e.currentTarget.value);};

const handleSubmit = e => {
  e.preventDefault();

  if (contacts.some(item => name === item.name)) {
      updateData(error);
      

    return;
  } 

  if ((name||number)!== '') {
   onAddContact({name, number});
   setName('');
   setNumber(''); 
   
   return;}

  updateData(error);};

  return(
    <div className={styles.border}>
         <form onSubmit={handleSubmit}>
           <label className={styles.text}>Name<br/>
         <input
           tape="text"
           value={name}
           onChange={handleInputChangeName}
               name="name" />
           </label>
         </form>
         
         <form onSubmit={handleSubmit}>
           <label className={styles.text}>Number<br/>
         <input
           tape="number"
           value={number}
           onChange={handleInputChangeNumber}
               name="number" />
           </label><br/>
           <Button 
        type="submit" 
        variant="primary">Add contact
        </Button>
         </form>
      </div>
  );
};

Input.propTypes = {
  updateData: PropTypes.func.isRequired
};

export default Input;