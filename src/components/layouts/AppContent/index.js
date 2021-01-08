import React from 'react';
import PropTypes from 'prop-types';

import AppBreadcrumb from '../AppBreadcrumb';
import { ContentWrapper, SiteContentWrapper } from './style';

function AppContent({ children }) {
  return (
    <ContentWrapper>
      <AppBreadcrumb />
      <SiteContentWrapper>
        {children && children}
      </SiteContentWrapper>
    </ContentWrapper>
  );
}

AppContent.propTypes = {
  children: PropTypes.node,
};

AppContent.defaultProps = {
  children: null,
};

export default AppContent;
