import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import contactsOperations  from '../redux/contacts/contacts-operations';
import Filter from '../components/Filter';
import Input from '../components/Input';
import Contacts from "../components/Contacts";
import Alert from '../components/Alert';
import styles from '../css/PhoneBook.module.css';
import '../css/animation.css';

export default function ContactsViev () {
  const [showTitle, setShowTitle] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(contactsOperations.fetchContacts());
  },[dispatch])

  const updateData = (value) => {
    setError(value);

    setTimeout(() => {
      setError(false)
    }, 3000);
  };

  return (
    <>
      <div className={styles.box}>

<CSSTransition
  in={error}
  appear={true}
  classNames='error'
  timeout={250}
  unmountOnExit>
  <Alert />
</CSSTransition>

<CSSTransition
  in={true}
  appear={true}
  classNames='fade'
  timeout={500}
  unmountOnExit>
  <h1 className={styles.phonebook}>Phonebook</h1>
</CSSTransition>

<Input updateData={updateData} />
<h2 className={styles.title}>Contacts</h2>

<CSSTransition
  in={true}
  timeout={250}
  classNames='fade'
  unmountOnExit>
  <Filter />
</CSSTransition>

<CSSTransition
  in={true}
  timeout={250}
  classNames='fade'
  unmountOnExit>
  <Contacts />
</CSSTransition>

</div>
    </>
  );
};