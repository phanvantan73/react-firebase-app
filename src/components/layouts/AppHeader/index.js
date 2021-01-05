import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

import { currentUserSelector } from '../../../stores/home/selectors';
import MenuBlock from './MenuBlock';
import InfoBlock from './InfoBlock';
import NavigateBlock from './NavigateBlock';
import { AuthWrapper, LogoWrapper, HeaderWrapper } from './style';

function AppHeader() {
  const location = useLocation();
  const currentUser = useSelector(currentUserSelector);

  return (
    <HeaderWrapper>
      <LogoWrapper />
      <MenuBlock currentPath={location.pathname} currentUser={currentUser} />
      <AuthWrapper>
        {currentUser ? <InfoBlock userName={currentUser.name} /> : <NavigateBlock />}
      </AuthWrapper>
    </HeaderWrapper>
  );
}

export default AppHeader;
