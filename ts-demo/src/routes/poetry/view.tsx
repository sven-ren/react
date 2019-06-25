import React from 'react';
import {
  Table,
} from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getList,
} from './actions';

interface IProps {
  getList: (param: any, callback: (data: any) => void) => void;
}
interface IState {
  list: any[];
}

class Poetry extends React.Component<IProps, IState> {
  public readonly state = {} as IState;
  public componentDidMount() {
    this.props.getList({keyword: '有'}, (data) => {
        this.setState({
            list: data.result.list,
        });
    });
  }
  public render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'title',
        key: 'title',
        render: (text: string, record: any) => {
            return <Link to='/poetryDetail'>{text}</Link>;
        },
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      },
    ];
    return (
      <div>
        <Table dataSource={this.state.list} columns={columns} rowKey='title'/>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    poetry: state.app.poetry,
  }),
  {
    getList,
  },
)(Poetry as any);
