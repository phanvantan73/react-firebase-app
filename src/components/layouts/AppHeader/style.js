import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const LogoWrapper = styled.div`
  width: 120px;
  height: 31px;
  margin-right: 24px;
  background: rgba(255, 255, 255, 0.3);
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  color: #fff;
`;

export const HeaderWrapper = styled(Header)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & div:last-of-type {
    margin-left: auto;
  }
`;
