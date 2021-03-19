import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from "../redux/contacts/contacts-operations";
import styles from '../css/PhoneBook.module.css'; 
import contactsSelectors from "../redux/contacts/contacts-selectors";
import {Button} from "react-bootstrap";

export default function Contacts () {
const contacts = useSelector(contactsSelectors.getVisibleContacts);
const dispatch = useDispatch();
//const deleteContacts = dispatch(contactsOperations.deleteContacts(contact.id));

return (
  
    <TransitionGroup component='ul'>
        {contacts.map(contact =>
        <CSSTransition 
        key={contact.id}
        classNames='fade'
        timeout={250}>
            <li className={styles.contact} >
            <p className={styles.text}>{contact.name}: {contact.number}</p>
            <section className={styles.gid}>
        <Button 
        type="button" 
        onClick={() => dispatch(contactsOperations.deleteContacts(contact.id))}
        variant="primary">Delete
        </Button>
            </section>
        </li>
        </CSSTransition>
        )}
        </TransitionGroup>
  );
};