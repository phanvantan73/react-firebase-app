import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';
import { LayoutWrapper } from './style';

function MainLayout({ children }) {
  return (
    <LayoutWrapper>
      <AppHeader />
      <AppContent children={children} />
      <AppFooter />
    </LayoutWrapper>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
