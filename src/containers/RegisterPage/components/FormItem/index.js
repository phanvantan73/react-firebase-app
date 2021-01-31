import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button } from 'antd';

const { Item } = Form;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormItem: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'email'}),
          },
        ]}
      >
        <Input />
      </Item>
      <Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'password'}),
          },
        ]}
      >
        <Input.Password />
      </Item>
      <Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {t('common.button.register')}
        </Button>
      </Item>
    </>
  );
}

export default FormItem;
