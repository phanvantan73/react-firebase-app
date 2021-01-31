import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContentWrapper } from './style';

const WelcomeBlock: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <h2>{t('common.welcome')}</h2>
    </ContentWrapper>
  );
}

export default WelcomeBlock;
