import React from 'react';
import { useParams } from "react-router-dom";

import CardContent from './CardContent';
import { Wrapper } from './style';

const TodoDetail: React.FC = () => {
  const { todoId } = useParams();

  return (
    <Wrapper>
      <CardContent todoId={todoId} />
    </Wrapper>
  );
}

export default TodoDetail;
