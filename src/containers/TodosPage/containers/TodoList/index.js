import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, List } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './components/ListItem';
import { Wrapper } from './style';


function TodoList({ todos }) {
  const { path } = useRouteMatch();
  return (
    <Wrapper>
      <List
        size="large"
        header={<div>Todos List</div>}
        bordered
        dataSource={todos}
        renderItem={item => <ListItem todo={item} />}
      />
    </Wrapper>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
