import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
//import thunk from 'redux-thunk'; 
//import { createStore, applyMiddleware } from 'redux';

//const store = createStore(applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
    <BrowserRouter> 
       <App />
    </BrowserRouter>
</PersistGate>
</Provider>
, document.querySelector('#root'));