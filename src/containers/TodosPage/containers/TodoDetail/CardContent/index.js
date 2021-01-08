import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Image } from 'antd';

import { fetchTodo, updateTodo, fetchTodos } from 'stores/todo/thunks';
import { todoDetailSelector } from 'stores/todo/selectors';

const { Meta } = Card;

function CardContent({ todoId }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const todo = useSelector(todoDetailSelector);
  const imageUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

  const handleClick = () => {
    const newTodo = {...todo, done: !todo.done};
    dispatch(updateTodo({todoId, newTodo}));
    dispatch(fetchTodos());
  };

  useEffect(() => {
    dispatch(fetchTodo(todoId));
  }, [todoId]);

  return (
    <Card
      title="Todo detail"
      cover={
        <Image src={imageUrl} />
      }
      {...(!todo?.done && { actions: [
        <Button type="primary" block onClick={handleClick}>
          {t('common.button.mark_as_done')}
        </Button>
      ]})}
    >
      <Meta
        title={todo?.title || 'none'}
        description={todo?.description || 'none'}
      />
    </Card>
  );
}

CardContent.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default CardContent;
