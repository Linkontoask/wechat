import React , { Component } from 'react';
import '../style/EntryCommunication.sass';

import { Icon, Input } from "antd";
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_836575_gxdpqhmux69.js',
});


export default class EntryCommunication extends Component {
    render() {
        return (
            <div className="EntryCommunication">
                <IconFont type="icon-keyboard" />
                <Input placeholder="default size" />
                <IconFont type="icon-jiahao-fill" />
            </div>
        )
    }
}
