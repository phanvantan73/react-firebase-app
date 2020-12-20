import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('common.notFound404')}</title>
      </Helmet>
      <div>{t('common.notFound404')}</div>
    </>
  );
}

export default NotFoundPage;
