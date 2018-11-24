import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd'
import '../style/NavState.sass'
import {ChatMainPos, PositionCurrent, RouterLeft, ShowScreen} from "../actions/NavTag";

class NavState extends Component{
    render() {
        return (
            <div className="NavState">
                {this.props.getState().value && <div className="back"  style={{opacity: this.props.getState().currentIndex}} onTouchEnd={this.back.bind(this)}>
                    <Icon type="left" style={{fontSize: 16}} />
                    返回
                </div>}
                <h1>{this.props.getState().text}</h1>
            </div>
        )
    }
    back() {
        this.props.history.push(`/`);
        this.props.dispatch(ShowScreen(false));
        this.props.dispatch(PositionCurrent(1));
        this.props.dispatch(ChatMainPos('110%'));
        this.props.dispatch(RouterLeft(0, true));
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
