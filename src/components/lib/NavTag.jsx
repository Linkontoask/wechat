import React, { Component } from 'react';
import '../style/NavTag.sass'
import {Icon, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { NavIndex } from '../actions/NavTag'

class NavTag extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nav: [{
                icon: 'aliwangwang',
                name: '微信'
            },{
                icon: 'team',
                name: '通讯录'
            },{
                icon: 'chrome',
                name: '朋友圈'
            },{
                icon: 'user',
                name: '设置'
            }]
        }
    }

    render() {
        return (
            <div className="NavTag">
                <Row gutter={8} justify="space-between">
                    {this.state.nav.map((item, index)=>{
                        return (
                            <Col key={index} span={6} onTouchEnd={this.test.bind(this, index)} className={this.props.getIndex() === index ? 'focus' : 'burl'}>
                                <Icon type={item.icon} style={{'fontSize': '18px'}} />
                                <p>{item.name}</p>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }

    test(index) {
        this.props.dispatch(NavIndex(index));
        console.log(this.props.getIndex());
    }
}
function connectState(state) {
    return {
        getIndex() {
            return state ? state.index : 0
        }
    }
}

export default connect(
    connectState
)(NavTag)
