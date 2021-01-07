import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { isEmpty } from 'lodash';

import { currentUserSelector } from 'stores/home/selectors';
import MenuBlock from './MenuBlock';
import InfoBlock from './InfoBlock';
import NavigateBlock from './NavigateBlock';
import { AuthWrapper, LogoWrapper, HeaderWrapper } from './style';

function AppHeader() {
  const location = useLocation();
  const currentUser = useSelector(currentUserSelector);

  const renderAuthContent = () => (
    !isEmpty(currentUser) ? <InfoBlock userName={currentUser.name} /> : <NavigateBlock />
  );

  return (
    <HeaderWrapper>
      <LogoWrapper />
      <MenuBlock currentPath={location.pathname} currentUser={currentUser} />
      <AuthWrapper>
        {renderAuthContent()}
      </AuthWrapper>
    </HeaderWrapper>
  );
}

export default AppHeader;
