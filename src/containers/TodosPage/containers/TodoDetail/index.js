import React from 'react';
import { useParams } from "react-router-dom";

import CardContent from './CardContent';
import { Wrapper } from './style';

function TodoDetail() {
  const { todoId } = useParams();

  return (
    <Wrapper>
      <CardContent todoId={todoId} />
    </Wrapper>
  );
}

export default TodoDetail;
