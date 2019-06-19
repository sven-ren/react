import React from "react";
import {
  Layout,
  Menu,
  Button
} from "antd";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";
import logo from "@/imgs/mce_logo.png";
import {
  getTenants,
} from "@/routes/layout/actions";

const { Header, Sider, Content } = Layout;

interface IProps {
  getTenants: Function
}
interface IState {
  count: number
}

class MceLayout extends React.Component<IProps,IState> {
  readonly state = {
    count: 0
  }
  constructor(props: any) {
    super(props);
  }
  componentDidMount(){
    this.props.getTenants()
  }
  add = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <Layout>
        <Header style={{ padding: 0 }}>
          <GlobalHeader
            img=''
            title='header'
          />
        </Header>
        <Layout>
          
          <Layout style={{backgroundColor:'#fff'}}>
            <Content style={{ margin: "24px 24px 0", height: "100%" }}>
            count:{this.state.count}
              <Button onClick={this.add}>add</Button>
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
    tenant_uuid: state.mce.tenant.tenant_uuid
  }),
  {
    getTenants,
  }
)(MceLayout)
