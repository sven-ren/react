import React, { PureComponent } from "react";
import { Menu, Icon, Dropdown, Avatar, Button, Select } from "antd";
import { Link, withRouter } from "react-router-dom";
import styles from "./index.module.scss";
import { connect } from "react-redux";

interface props {
    title: string,
    img: string
}

const Option = Select.Option;
export default class GlobalHeader extends PureComponent<props,{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      tenants: [], //租户列表
      serverconfig: '',
    };
  }
  render(){
      return (
          <div>{this.props.title}</div>
      )
  }
}

// export default withRouter(GlobalHeader);
