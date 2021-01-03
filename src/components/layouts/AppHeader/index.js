import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../../stores/home/selectors';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  AuthWrapper,
  LogoWrapper,
  InfoWrapper,
  HeaderWrapper,
} from './style';

const { Item } = Menu;

function AppHeader() {
  const { t } = useTranslation();
  const currentUser = useSelector(currentUserSelector);

  return (
    <HeaderWrapper>
      <LogoWrapper />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Item key="1">{t('common.menu.home')}</Item>
        <Item key="2">{t('common.menu.todos')}</Item>
        <Item key="3">{t('common.menu.about')}</Item>
      </Menu>
      <AuthWrapper>
        {currentUser ? <InfoWrapper>T</InfoWrapper> : <><Link to="/login">Login</Link>
 | <Link to="/register">Register</Link></>}
      </AuthWrapper>
    </HeaderWrapper>
  );
}

export default AppHeader;
