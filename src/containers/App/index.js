import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import firebaseApp from 'config/firebase';
import { setCurrentUser } from 'stores/home/homeSlice';
import { routes } from 'utils/constants';

const HomePage = lazy(() => import('../HomePage'));
const TodosPage = lazy(() => import('../TodosPage'));
const LoginPage = lazy(() => import('../LoginPage'));
const RegisterPage = lazy(() => import('../RegisterPage'));
const NotFoundPage = lazy(() => import('../NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  firebaseApp.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = {
        email: user.email,
        name: `User ${user.createdAt}`,
      };
      dispatch(setCurrentUser(currentUser));
    } else {
      dispatch(setCurrentUser(null));
    }
  });

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.todosPage} component={TodosPage} />
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
