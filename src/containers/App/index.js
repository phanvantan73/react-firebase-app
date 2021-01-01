import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../utils/constants';

const HomePage = lazy(() => import('../HomePage'));
const LoginPage = lazy(() => import('../LoginPage'));
const RegisterPage = lazy(() => import('../RegisterPage'));
const NotFoundPage = lazy(() => import('../NotFoundPage'));

function App() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.loginPage} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default App;
