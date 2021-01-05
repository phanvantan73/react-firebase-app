import styled from 'styled-components';
import { List } from 'antd';

const { Item } = List;

export const ItemWrapper = styled(Item)`
  &.is-done {
    background-color: antiquewhite;
  }
`;
