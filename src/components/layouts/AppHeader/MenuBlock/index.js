import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const { Item } = Menu;

function MenuBlock({ currentPath, currentUser }) {
  const { t } = useTranslation();

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[currentPath]}>
      <Item key="/">
        <Link to="/">{t('common.menu.home')}</Link>
      </Item>
      {currentUser && (<Item key="/todos">
        <Link to="/todos">{t('common.menu.todos')}</Link>
      </Item>)}
      <Item key="/about">
        <Link to="/about">{t('common.menu.about')}</Link>
      </Item>
    </Menu>
  );
}

MenuBlock.propTypes = {
  currentPath: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
};

MenuBlock.defaultProps = {
  currentUser: null,
};

export default MenuBlock;
