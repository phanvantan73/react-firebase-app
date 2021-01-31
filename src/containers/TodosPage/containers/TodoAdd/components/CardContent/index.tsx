import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form, Button, Input } from 'antd';

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

type TProps = {
  handleFinish: () => void,
};

const CardContent: React.FC<TProps> = ({ handleFinish }: TProps) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish: void = async (values) => {
    const newTodo = {...values, done: false};
    handleFinish(newTodo);
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        label={t('common.label.title')}
        name="title"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'title'}),
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('common.label.description')}
        name="description"
        rules={[
          {
            required: true,
            message: t('common.validate.required', { field: 'description'}),
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {t('common.button.create')}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CardContent;
