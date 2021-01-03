import React from 'react';
import MainLayout from '../../components/layouts';
import AuthWrapper from '../../components/AuthWrapper';
import FormItem from './components/FormItem';

function LoginPage() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <MainLayout>
      <AuthWrapper onFinish={onFinish}>
        <FormItem />
      </AuthWrapper>
    </MainLayout>
  );
}

export default LoginPage;
