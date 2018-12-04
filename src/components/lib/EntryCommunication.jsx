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
        this.offsetTop = 0;
        this.current = -1;
        this.oldHeight = -1;
        this.state = {
            value: ''
        }
    }
    render() {
        const { value } = this.state;
        return (
            <div className="EntryCommunication" id={"entry"}>
                <IconFont type="icon-keyboard" />
                <Input
                    onPressEnter={this.props.keySend}
                    onChange={this.onChangeValue.bind(this)}
                    onFocus={this.handelFocus.bind(this)}
                    onBlur={this.handelBlur.bind(this)}
                    ref={node => this.input = node}
                    value={value} />
                <IconFont type="icon-jiahao-fill" />
            </div>
        )
    }
    onChangeValue (e) {
        e.preventDefault();
        this.setState({ value: e.target.value });
    }
    activeBlur() {
        this.input.blur();
    }
    handelBlur(e) {
        e.preventDefault();

        let obj = document.querySelector('.ChatContent');
        obj.style.height = this.oldHeight + 'px'
    }
    handelFocus(e) {
        e.preventDefault();

        setTimeout(() => {
            let obj = document.querySelector('.ChatContent');
            if (this.current === -1) {
                this.current = this.offsetTop - document.querySelector('#entry').offsetTop;
            }
            obj.style.height = obj.offsetHeight - this.current + 'px';
        }, 1000);
    }
    emitEmpty() {
        this.setState({ value: '' });
    }
    componentDidMount() {
        this.offsetTop = document.querySelector('#entry').offsetTop || 200;
        this.oldHeight = document.querySelector('.ChatContent').offsetHeight;
    }
}

EntryCommunication.propsTypes = {
    keySend: PropsTypes.func.isRequired
};
