import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/layouts';
import { Row, Col } from 'antd';
import TodoList from './containers/TodoList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { fetchTodos } from '../../stores/todo/thunks';
import {
  todosSelector,
} from '../../stores/todo/selectors';
import TodoDetail from './containers/TodoDetail';
import TodoAdd from './containers/TodoAdd';

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
