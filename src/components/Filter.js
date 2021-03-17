import React from "react";
import * as contactsActions from "../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from 'react-redux';
import styles from '../css/PhoneBook.module.css';
import contactsSelectors from "../redux/contacts/contacts-selectors";

export default function Filter () {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

return (
        <div>
            <p className={styles.textFilter}>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
);
};

