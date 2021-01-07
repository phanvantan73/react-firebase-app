import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'antd';

import Logo from 'assets/images/logo.svg';
import FormContent from './FormContent';
import { Wrapper } from './style';

function AuthWrapper({ children, onFinish }) {
  return (
    <Wrapper>
      <Image
        width={400}
        src={Logo}
      />
      <FormContent onFinish={onFinish}>
        {children}
      </FormContent>
    </Wrapper>
  );
}

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default AuthWrapper;
