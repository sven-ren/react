import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

interface IProps {
  getList: (param: any, callback: (data: any) => void) => void;
}
interface IState {
  list: any[];
}

class PoetryDetail extends React.Component<IProps, IState> {
  public readonly state = {} as IState;
  public render() {
    return (
      <div>
        <Row>
            <Col span={2}>
                标题: xxxx
            </Col>
        </Row>
        <Row>
            <Col span={2}>
                正文: xxxxxx
            </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    poetry: state.app.poetry,
  }),
)(PoetryDetail as any);
