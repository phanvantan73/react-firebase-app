import React from 'react';

import { BreadcrumbWrapper, ItemWrapper } from './style';

function AppBreadcrumb() {
  return (
    <BreadcrumbWrapper>
      <ItemWrapper>Home</ItemWrapper>
      <ItemWrapper>List</ItemWrapper>
      <ItemWrapper>App</ItemWrapper>
    </BreadcrumbWrapper>
  );
}

export default AppBreadcrumb;
