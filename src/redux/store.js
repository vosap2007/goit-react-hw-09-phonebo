import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth';
import ContactsReducer from "./contacts/contacts-reducer";

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    //logger,
  ];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

const store = configureStore({ 
    reducer: {
        //contacts: persistReducer(contactsPersistConfig, ContactsReducer), 
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: ContactsReducer, 
    },
    middleware: middleware, 
    devTools: process.env.NODE_ENV === 'development', });

const persistor = persistStore(store);

export default { store, persistor };