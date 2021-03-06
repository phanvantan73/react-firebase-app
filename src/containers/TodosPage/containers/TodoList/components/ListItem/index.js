import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { CheckOutlined, EllipsisOutlined } from '@ant-design/icons';

import { ItemWrapper } from './style';

function ListItem({ todo }) {
  const { t } = useTranslation();
  const { url } = useRouteMatch();

  return (
    <ItemWrapper
      className={todo.done ? 'is-done' : ''}
    >
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
      <p>{todo.done ? <CheckOutlined /> : <EllipsisOutlined />}</p>
      <p>
        <Link to={`${url}/${todo.id}/detail`}>{t('common.button.detail')}</Link>
      </p>
    </ItemWrapper>
  );
}

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ListItem;
