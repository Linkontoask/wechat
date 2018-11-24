import React , { Component } from 'react';
import PropsTypes from 'prop-types'
import '../style/EntryCommunication.sass';

import { Icon, Input  } from "antd";
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_836575_gxdpqhmux69.js',
});

export default class EntryCommunication extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    render() {
        const { value } = this.state;
        return (
            <div className="EntryCommunication">
                <IconFont type="icon-keyboard" />
                <Input
                    onPressEnter={this.props.keySend}
                    onChange={this.onChangeValue.bind(this)}
                    ref={node => this.input = node}
                    value={value} />
                <IconFont type="icon-jiahao-fill" />
            </div>
        )
    }
    onChangeValue (e) {
        this.setState({ value: e.target.value });
    }
    emitEmpty() {
        this.setState({ value: '' });
    }
}

EntryCommunication.propsTypes = {
    keySend: PropsTypes.func.isRequired
};