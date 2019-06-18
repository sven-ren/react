import React from "react";
import {
  Layout,
  Menu,
} from "antd";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";
import logo from "@/imgs/mce_logo.png";
// import menus from "../../common/matrixMenus";
// import { getMenuTree, getRoutes, hignLightMenu, openKeys } from "../../common/router";
// import { getAllList, getNamespaceList } from "./actions";
// import CommonTop from '@/components/CommonTop/CommonTop';

const { Header, Sider, Content } = Layout;

// @connect(
//   state => ({
//     clusters: {
//       list: state.mce.clusters.list,
//       current: state.mce.clusters.current,
//       namespace: {
//         list: state.mce.clusters.namespacelist
//       }
//     }
//   }),
//   {
//     getAllList,
//     getNamespaceList
//   }
// )
export default class MceLayout extends React.Component<{},{}> {
  constructor(props: any) {
    super(props);
    // this.menus = menus;
    // this.state = {
    //   collapsed: false
    // };
  }
  // onCollapse = collapsed => {
  //   this.setState({ collapsed });
  // };
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
            
              
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
