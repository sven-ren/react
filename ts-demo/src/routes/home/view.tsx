import React from 'react';
import {
  Table,
} from 'antd';
import { connect } from 'react-redux';
import {
  getList,
} from './actions';

interface IProps {
  getList: (callback: (data: any) => void) => void;
}
interface IState {
  list: any[];
}

class Home extends React.Component<IProps, IState> {
  public readonly state = {} as IState;
  public componentDidMount() {
    this.props.getList((data: any) => {
      this.setState({
        list: data.data,
      });
    });
  }
  public render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '地区码',
        dataIndex: 'area_code',
        key: 'area_code',
      },
    ];
    return (
      <div>
        <Table dataSource={this.state.list} columns={columns} rowKey='pinyin'/>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    province: state.app.province,
  }),
  {
    getList,
  },
)(Home as any);
