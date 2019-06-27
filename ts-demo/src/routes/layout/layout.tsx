import React from 'react';
import {
  Layout,
} from 'antd';
import { Switch, Redirect } from 'react-router-dom';
import GlobalHeader from '@/components/Header';
import SideBar from '@/components/Sider';
import styles from './index.module.scss';

import routers from '@/router/router';

const { Header, Sider, Content } = Layout;

interface IState {
  msg?: string;
}

export default class LayoutComponent extends React.Component<{}, IState> {
  public readonly state = {
      msg: 'welcome',
   } as IState;
  public render() {
    return (
      <Layout style={{height: '100vh'}}>
        <Header style={{ padding: 0 }}>
          <GlobalHeader
            img=''
            title='header'
          />
        </Header>
        <Layout>
          <Sider>
            <SideBar/>
          </Sider>
          <Layout style={{backgroundColor: '#fff'}}>
            <Content className={styles.content}>
              <Switch>
                <Redirect exact from='/' to='/home' />
                {routers}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
