import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default class Sider extends PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  public render() {
      return (
          <div>
              <Menu theme='dark'>
                  <Menu.Item>
                      <Link to='/home'>
                          <Icon type='home'/>
                          home
                      </Link>
                  </Menu.Item>
                  <Menu.Item>
                      <Link to='/poetry'>
                          <Icon type='book'/>
                          poetry
                      </Link>
                  </Menu.Item>
              </Menu>
          </div>
      );
  }
}
