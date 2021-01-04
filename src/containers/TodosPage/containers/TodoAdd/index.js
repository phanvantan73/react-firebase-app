import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';

import CardContent from './components/CardContent';
import { fetchTodos, addTodo } from '../../../../stores/todo/thunks';
import { todoDetailSelector } from '../../../../stores/todo/selectors';
import { Wrapper } from './style';

function TodoAdd() {
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = useSelector(todoDetailSelector);

  const handleFinish = (newTodo) => {
    dispatch(addTodo(newTodo));
    dispatch(fetchTodos());
  };

  return (
    <Wrapper>
      <Card title="Add new todo">
      <CardContent handleFinish={handleFinish}/>
      </Card>
    </Wrapper>
  );
}

export default TodoAdd;
