import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { ListHeaderWrraper } from './style';

function ListHeader() {
  const { url } = useRouteMatch();

  return (
    <ListHeaderWrraper>
      <span>
        <strong>Todos List</strong>
      </span>
      <Link to={`${url}/add`}>Add new todo</Link>
    </ListHeaderWrraper>
  );
}

export default ListHeader;
