import React from 'react';
import { Layout, Menu } from 'antd';
import { LogoWrapper } from './style';

const { Header } = Layout;
const { Item } = Menu;

function AppHeader() {
  return (
    <Header>
      <LogoWrapper />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Item key="1">nav 1</Item>
        <Item key="2">nav 2</Item>
        <Item key="3">nav 3</Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;
