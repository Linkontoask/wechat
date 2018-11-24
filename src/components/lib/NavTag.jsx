import React, { Component } from 'react';
import '../style/NavTag.sass'
import {Icon, Row, Col } from 'antd'
import { connect } from 'react-redux'
import { NavIndex, FixedPage } from '../actions/NavTag'
import PropTypes from 'prop-types'

let url = ['/', '/contacts', '/friends', '/setting'];
class NavTag extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nav: [{
                url: '/',
                icon: 'aliwangwang',
                name: '微信'
            },{
                url: '/contacts',
                icon: 'team',
                name: '通讯录'
            },{
                url: '/friends',
                icon: 'chrome',
                name: '朋友圈'
            },{
                url: '/setting',
                icon: 'user',
                name: '设置'
            }]
        }
    }

    render() {
        return (
            <div className={`NavTag`} style={{zIndex: this.props.zIndex, opacity: this.props.opacity}}>
                <Row gutter={8} justify="space-between">
                    {this.state.nav.map((item, index)=>{
                        return (
                            <Col key={index} span={6} onTouchEnd={this.swiper.bind(this, index, item.name, item.url)} className={this.props.getIndex() === index ? 'focus' : 'burl'}>
                                <Icon type={item.icon} style={{'fontSize': '18px'}} />
                                <p>{item.name}</p>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }

    swiper(index, name, path) {
        this.props.dispatch(NavIndex(index));
        this.props.dispatch(FixedPage(name));
        this.props.history.push(path);
    }

    componentDidMount() {
    }
}


function connectState(state) {
    return {
        getIndex() {
            let current = 0;
            if (!state) {
                url.forEach((item, index)=>{
                    if (item === window.location.pathname) {
                        current = index
                    }
                });
            }

            return state ? state.index : current
        }
    }
}

NavTag.propTypes = {
    zIndex: PropTypes.number
};
NavTag.defaultProps = {
    zIndex: 2,
    opacity: 1
};

export default connect(
    connectState
)(NavTag)
