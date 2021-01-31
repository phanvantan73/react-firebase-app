import React from 'react';
import { Row, Col } from 'antd';

import MainLayout from 'components/layouts';
import ImageBlock from './components/ImageBlock';
import WelcomeBlock from './components/WelcomeBlock';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Row gutter={16}>
        <Col span={10}>
          <ImageBlock />
        </Col>
        <Col span={14}>
          <WelcomeBlock />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default HomePage;
