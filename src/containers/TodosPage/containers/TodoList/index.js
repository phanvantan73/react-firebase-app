import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import ListItem from './components/ListItem';
import ListHeader from './components/ListHeader';
import { Wrapper } from './style';


function TodoList({ todos }) {
  return (
    <Wrapper>
      <List
        size="large"
        header={<ListHeader />}
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
