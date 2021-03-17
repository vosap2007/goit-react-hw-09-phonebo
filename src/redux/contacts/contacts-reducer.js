import { combineReducers} from 'redux';
import authActions from '../auth/auth-actions';
import { createReducer } from '@reduxjs/toolkit';
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
    changeFilter,
} from './contacts-actions';

const items = createReducer([], {
    [fetchContactSuccess]: (_, action) => action.payload,
    [addContactSuccess]: (state, action) => [...state, action.payload],
    [deleteContactSuccess]: (state, action) => state.filter(contact =>contact.id !== action.payload),
    [authActions.logoutSuccess]: () =>[],
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
   // [fetchLogoutUserSuccess]: () => [],
});

const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});