import React from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import GlobalHeader from '@/components/GlobalHeader';

import routers from '@/router/router';

const { Header, Sider, Content } = Layout;

// interface IProps {
//   getList: (callback: (data: any) => void) => void;
// }
interface IState {
  msg?: string;
}

export default class LayoutComponent extends React.Component<{}, IState> {
  public readonly state = {
      msg: 'welcome',
   } as IState;
  constructor(props: {}) {
    super(props);
  }
  public componentDidMount() {
    // this.props.getList((data: any) => {
    //   window.console.log(data);
    // });
  }
  public render() {
    return (
      <Layout>
        <Header style={{ padding: 0 }}>
          <GlobalHeader
            img=''
            title='header'
          />
        </Header>
        <Layout>
          <Sider>
            sider
          </Sider>
          <Layout style={{backgroundColor: '#fff'}}>
            <Content style={{ margin: '24px 24px 0', height: '100%' }}>
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

// export default connect(
//   (state: any) => ({
//     province: state.app.province,
//   }),
//   {
//     getList,
//   },
// )(LayoutComponent as any);
