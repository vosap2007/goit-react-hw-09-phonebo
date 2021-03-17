import React, { Suspense, lazy, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import { useDispatch } from 'react-redux';
import AppBar from './AppBar';
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const HomeViev = lazy(() => import('../views/HomeViev'));
const LoginViev = lazy(() => import('../views/LoginViev'));
const RegisterViev = lazy(() => import('../views/RegisterViev'));
const ContactsViev = lazy(() => import('../views/ContactsViev'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

    return (
      <>

        <div>
          <AppBar />
<Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeViev} />
            <PublicRoute path="/register" redirectTo = '/contacts' restricted component={RegisterViev} />
            <PublicRoute path="/login" redirectTo = '/contacts' restricted component={LoginViev} />
            <PrivateRoute path="/contacts" redirectTo = '/login' component={ContactsViev} />
          </Switch>
          </Suspense>
        </div>
      </>
    );
};
