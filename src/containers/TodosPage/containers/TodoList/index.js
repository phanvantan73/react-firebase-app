import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import ListItem from './components/ListItem';
import ListHeader from './components/ListHeader';
import { Wrapper } from './style';

const renderItem = (item) => (<ListItem todo={item} />);

function TodoList({ todos }) {
  return (
    <Wrapper>
      <List
        size="large"
        header={<ListHeader />}
        bordered
        dataSource={todos}
        renderItem={(item) => renderItem(item)}
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
