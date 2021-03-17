import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./contacts-actions";

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
  .get('/contacts')
    .then(({data}) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)));
  };

const addContacts = ({ name, number }) => dispatch => {
    const contact = { 
       name, 
       number, 
       completed: false,
    };
 
    dispatch(addContactRequest());
     
    axios
    .post("/contacts", contact)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
  };

  const deleteContacts = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
  };

 
  export default {
      addContacts,
      deleteContacts,
      fetchContacts,
};