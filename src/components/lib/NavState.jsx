import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/NavState.sass'

class NavState extends Component{
    render() {
        return (
            <div className="NavState">
                {this.props.getTitle()}
            </div>
        )
    }
}

function connectState(state) {
    return {
        getTitle() {
            return state ? state.text : '微信'
        }
    }
}

export default connect(
    connectState
)(NavState)
