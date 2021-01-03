import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper } from './style';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

function FormContent({ children, onFinish }) {
  return (
    <FormWrapper
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      {children}
    </FormWrapper>
  );
}

FormContent.propTypes = {
  children: PropTypes.node.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default FormContent;
