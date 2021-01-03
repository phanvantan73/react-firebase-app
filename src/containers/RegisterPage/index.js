import React from 'react';
import { useHistory } from "react-router-dom";

import { routes } from '../../utils/constants';
import MainLayout from '../../components/layouts';
import AuthWrapper from '../../components/AuthWrapper';
import FormItem from './components/FormItem';
import { authServices } from '../../services';

function RegisterPage() {
  const history = useHistory();

  const onFinish = async (values) => {
    const { email, password } = values;
    await authServices.register(email, password);
    history.push(routes.homePage);
  };

  return (
    <MainLayout>
      <AuthWrapper onFinish={onFinish}>
        <FormItem />
      </AuthWrapper>
    </MainLayout>
  );
}

export default RegisterPage;
