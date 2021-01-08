import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card } from 'antd';

import CardContent from './components/CardContent';
import { fetchTodos, addTodo } from 'stores/todo/thunks';
import { Wrapper } from './style';

function TodoAdd() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFinish = (newTodo) => {
    dispatch(addTodo(newTodo));
    dispatch(fetchTodos());
  };

  return (
    <Wrapper>
      <Card title={t('common.title.add_new_todo')}>
        <CardContent handleFinish={handleFinish}/>
      </Card>
    </Wrapper>
  );
}

export default TodoAdd;
