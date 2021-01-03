import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './style';

function TodoDetail({ todos }) {
  const { todoId } = useParams();
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      <Card title="Todo detail">
        <p>{todoId}</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Wrapper>
  );
}

// TodoList.propTypes = {
//   todos: PropTypes.array,
// };

// TodoList.defaultProps = {
//   todos: [],
// };

export default TodoDetail;
