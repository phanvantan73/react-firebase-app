import React from 'react';
import { List } from 'antd';

import ListItem from './components/ListItem';
import ListHeader from './components/ListHeader';
import { Wrapper } from './style';

interface ITodo {
  id: string,
  title: string,
  description: string,
  done: boolean,
};

type TProps = {
  todos: Array<ITodo | null>,
};

const renderItem: React.ReactNode = (item: ITodo) => (<ListItem todo={item} />);

const TodoList: React.FC<TProps> = ({ todos = [] }) => {
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

export default TodoList;
