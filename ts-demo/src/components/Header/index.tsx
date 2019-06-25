import React, { PureComponent } from 'react';
import styles from './index.module.scss';

interface IProps {
    title: string;
    img: string;
}

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
