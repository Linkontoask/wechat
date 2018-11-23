import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd'
import '../style/NavState.sass'
import {ShowScreen} from "../actions/NavTag";

class NavState extends Component{
    render() {
        return (
            <div className="NavState">
                {this.props.getState().value && <div className="back" onTouchEnd={this.back.bind(this)}>
                    <Icon type="left" style={{fontSize: 16}} />
                    返回
                </div>}
                {this.props.getState().text}
            </div>
        )
    }
    back() {
        this.props.history.push(`/`);
        this.props.dispatch(ShowScreen(false));
    }
}

function connectState(state) {
    return {
        getState() {
            return state
        }
    }
}

export default connect(
    connectState
)(NavState)
