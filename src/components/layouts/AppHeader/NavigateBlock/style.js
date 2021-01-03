import styled from 'styled-components';
import { Space } from 'antd';

export const SpaceWrapper = styled(Space)`
  color: #fff;
  font-weight: 800;

  & > .ant-space-item {
    & > a {
      color: #fff;
    }
  }
`;
