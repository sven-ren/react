import React, { PureComponent } from 'react';
import { Menu, Icon, Dropdown, Avatar, Button, Select } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styles from './index.module.scss';
import { connect } from 'react-redux';

interface IProps {
    title: string;
    img: string;
}

const Option = Select.Option;
export default class GlobalHeader extends PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  public render() {
      return (
          <div className={styles.headerBox}>{this.props.title}</div>
      );
  }
}

// export default withRouter(GlobalHeader);
