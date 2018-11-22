import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../style/base/Delete.sass'

class DeleteWechat extends Component{
    render() {
        return (
            <div className="delete-wechat"  onTouchEnd={this.props.handlDelete}>
                删除
            </div>
        )
    }
}

DeleteWechat.propTypes = {
    handlDelete: PropTypes.func.isRequired
};

export default DeleteWechat;
