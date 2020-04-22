import React from 'react';
import './head.css'
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

class head extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="head">
                <Row>
                    <Col span={8}>
                        <Link to="/list">列表</Link>
                    </Col>
                    {/* <Col span={6}>
                        <Link to="/details">详情</Link>
                    </Col> */}
                    <Col span={8}>
                        <Link to="/add">添加</Link>
                    </Col>
                    <Col span={8}>
                        <Link to="/state">+1计算器</Link>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default head;
