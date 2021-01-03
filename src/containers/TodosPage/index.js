import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/layouts';
import { Row, Col, Card } from 'antd';
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

function TodosPage() {
  const { path, url } = useRouteMatch();
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
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </Col>
        <Col span={12}>
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:todoId`}>
              <TodoDetail />
            </Route>
          </Switch>
        </Col>
      </Row>
    </MainLayout>
  );
}

function Topic() {
  const { todoId } = useParams();
  return (
    <Card title="Todo detail">
      <p>{todoId}</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default TodosPage;
