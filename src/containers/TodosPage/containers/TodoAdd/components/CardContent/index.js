import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button, Input } from 'antd';

const onFinish = (values) => {
  console.log({values});
}

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function CardContent() {
  const { t } = useTranslation();

  return (
    <Form
      {...layout}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'name'}),
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'content'}),
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CardContent;
