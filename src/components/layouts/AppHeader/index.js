import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';

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
        {currentUser ? <InfoBlock userName={currentUser.name}/> : <NavigateBlock />}
      </AuthWrapper>
    </HeaderWrapper>
  );
}

export default AppHeader;
