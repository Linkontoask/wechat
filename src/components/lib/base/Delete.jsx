import React, { Component } from 'react';
import '../../style/base/Delete.sass'

class DeleteWechat extends Component{
    handlDelete;
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="delete-wechat" style={{right: this.props.left}} onClick={this.props.handlDelete}>
                删除
            </div>
        )
    }
}

export default DeleteWechat;
