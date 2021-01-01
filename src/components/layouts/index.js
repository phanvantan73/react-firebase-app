import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

function MainLayout({ children }) {
  return (
    <Layout className="layout">
      <AppHeader />
      <AppContent children={children} />
      <AppFooter />
    </Layout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
