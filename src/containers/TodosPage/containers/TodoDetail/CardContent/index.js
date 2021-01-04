import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo, updateTodo } from '../../../../../stores/todo/thunks';
import { todoDetailSelector } from '../../../../../stores/todo/selectors';

const { Meta } = Card;

function CardContent({ todoId }) {
  const dispatch = useDispatch();
  const todo = useSelector(todoDetailSelector);
  // const imageUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  const imageUrl = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';

  const handleClick = () => {
    const newTodo = {...todo, done: !todo.done};
    dispatch(updateTodo(todoId, newTodo));
    console.log('Clicked', todoId, todo, newTodo);
  };

  useEffect(() => {
    dispatch(fetchTodo(todoId));
    console.log(todoId);
  }, [todoId]);

  return (
    <Card
      title="Todo detail"
      cover={
        <Image src={imageUrl} />
      }
      {...(!todo?.done && { actions: [
        <Button type="primary" block onClick={handleClick}>
          Mark as done
        </Button>
      ]})}
    >
      <Meta
        title={todo?.name || 'none'}
        description={todo?.content || 'none'}
      />
    </Card>
  );
}

CardContent.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default CardContent;
