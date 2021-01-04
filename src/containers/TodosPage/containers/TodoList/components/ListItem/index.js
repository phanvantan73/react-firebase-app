import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";
import { List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

function TodoList({ todo }) {
  const { url } = useRouteMatch();

  return (
    <List.Item>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      {!todo.done && (<p><CheckOutlined /></p>)}
      <p>
        <Link to={`${url}/${todo.id}/detail`}>Detail</Link>
      </p>
    </List.Item>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoList;
