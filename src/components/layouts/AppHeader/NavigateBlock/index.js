import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { SpaceWrapper } from './style';

function NavigateBlock() {
  const { t } = useTranslation();

  return (
    <SpaceWrapper>
      <Link to="/login">{t('common.authenticate.login')}</Link>
      <span>|</span>
      <Link to="/register">{t('common.authenticate.register')}</Link>
    </SpaceWrapper>
  );
}

export default NavigateBlock;
