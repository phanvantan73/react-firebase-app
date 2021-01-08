import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Row, Col } from 'antd';

import MainLayout from 'components/layouts';
import TodoList from './containers/TodoList'
import { fetchTodos } from 'stores/todo/thunks';
import { todosSelector } from 'stores/todo/selectors';

const TodoDetail = lazy(() => import('./containers/TodoDetail'));
const TodoAdd = lazy(() => import('./containers/TodoAdd'));

function TodosPage() {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <TodoList todos={todos}/>
        </Col>
        <Col span={12}>
          <Switch>
            <Route exact path={`${path}/:todoId/detail`} component={TodoDetail} />
            <Route exact path={`${path}/add`} component={TodoAdd} />
          </Switch>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default TodosPage;
