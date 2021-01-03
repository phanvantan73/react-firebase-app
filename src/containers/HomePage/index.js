import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../stores/home/thunks';
import {
  homeLoadingSelector,
  usersSelector,
} from '../../stores/home/selectors';
import { List, Button, Divider } from 'antd';
import MainLayout from '../../components/layouts';

function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(homeLoadingSelector);
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return 'loading...';

  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  }

  const listStyle = {
    justifyContent: 'space-around',
  };

  return (
    <MainLayout>
      <div>
        <div style={style}>
          <Button type="primary">Add user</Button>
        </div>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={item => (
            <List.Item style={listStyle}>
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
            </List.Item>
          )}
        />
      </div>
    </MainLayout>
  );
}

export default HomePage;
