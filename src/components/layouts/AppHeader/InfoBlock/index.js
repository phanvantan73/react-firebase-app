import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import { Space } from 'antd';

import { authServices } from 'services';
import { routes } from 'utils/constants';
import { InfoWrapper, TextWrapper } from './style';

function InfoBlock({ userName }) {
  const { t } = useTranslation();
  const history = useHistory();

  const handleClick = async () => {
    await authServices.logout();
    history.push(routes.loginPage);
  }

  return (
    <Space>
      <InfoWrapper>T</InfoWrapper>
      {userName && userName}
      <TextWrapper onClick={handleClick}>{t('common.authenticate.logout')}</TextWrapper>
    </Space>
  );
}

InfoBlock.propTypes = {
  userName: PropTypes.node,
};

InfoBlock.defaultProps = {
  userName: null,
};

export default InfoBlock;
