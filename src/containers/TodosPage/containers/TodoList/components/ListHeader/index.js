import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ListHeaderWrraper } from './style';

function ListHeader() {
  const { t } = useTranslation();
  const { url } = useRouteMatch();

  return (
    <ListHeaderWrraper>
      <span>
        <strong>{t('common.title.todo_list')}</strong>
      </span>
      <Link to={`${url}/add`}>{t('common.title.add_new_todo')}</Link>
    </ListHeaderWrraper>
  );
}

export default ListHeader;
