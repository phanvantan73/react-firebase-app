import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";

import { currentUserSelector } from '../../../stores/home/selectors';
import InfoBlock from './InfoBlock';
import NavigateBlock from './NavigateBlock';
import {
  AuthWrapper,
  LogoWrapper,
  HeaderWrapper,
} from './style';

const { Item } = Menu;

function AppHeader() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUser = useSelector(currentUserSelector);

  useEffect(() => {
  }, [location]);

  return (
    <HeaderWrapper>
      <LogoWrapper />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
        <Item key="/">
          <Link to="/">{t('common.menu.home')}</Link>
        </Item>
        <Item key="/todos">
          <Link to="/todos">{t('common.menu.todos')}</Link>
        </Item>
        <Item key="/about">
          <Link to="/about">{t('common.menu.about')}</Link>
        </Item>
      </Menu>
      <AuthWrapper>
        {currentUser ? <InfoBlock userName={currentUser.name}/> : <NavigateBlock />}
      </AuthWrapper>
    </HeaderWrapper>
  );
}

export default AppHeader;
