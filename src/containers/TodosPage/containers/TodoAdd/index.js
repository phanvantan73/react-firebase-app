import React from 'react';
import { Card } from 'antd';

import CardContent from './components/CardContent';
import { Wrapper } from './style';

function TodoAdd() {
  return (
    <Wrapper>
      <Card title="Add new todo">
        <CardContent />
      </Card>
    </Wrapper>
  );
}

export default TodoAdd;
