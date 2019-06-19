import React from "react";
import {
  Layout,
  Menu,
} from "antd";
import { connect } from "react-redux";
import { Switch, Redirect } from "react-router-dom";
import logo from "@/imgs/mce_logo.png";

export default class Home extends React.Component<{},{}> {
    readonly state = {
        title: 'home'
    }
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.state.title}
      </div>
    );
  }
}
