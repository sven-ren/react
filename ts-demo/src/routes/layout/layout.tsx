import React from 'react';
import {
  Layout,
} from 'antd';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import GlobalHeader from '@/components/GlobalHeader';
import {
  getTenants,
} from '@/routes/layout/actions';
import routers from '@/router/router';
import Home from '@/routes/home/view';

const { Header, Sider, Content } = Layout;

interface IProps {
  getTenants: () => void;
}
interface IState {
  count: number;
}

class LayoutComponent extends React.Component<IProps, IState> {
  public readonly state = {
    count: 0,
  };
  constructor(props: IProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.getTenants();
  }
  public add = () => {
    this.setState({
      count: this.state.count + 1,
    });
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

export default connect(
  (state: any) => ({
    tenants: state.mce.tenant.tenants,
    tenant_id: state.mce.tenant.tenant_id,
    tenant_uuid: state.mce.tenant.tenant_uuid,
  }),
  {
    getTenants,
  },
)(LayoutComponent as any);
