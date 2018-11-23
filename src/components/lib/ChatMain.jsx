import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ChatMain.sass';
import { callApi } from '../http/fetch'
// import {FixedPage} from "../actions/NavTag";
import { LineCose } from "./base/LineCose";
import EntryCommunication from './EntryCommunication'

class ChatMain extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: -1,
            list: []
        }
    }
    render() {
        return (
            <div className="ChatMain">
                <div className="ChatContent">
                    {this.state.list.map((item, index)=>{
                        return (
                            <LineCose
                                key={index}
                                opting={{
                                    target: item.target,
                                    type: item.type,
                                    color: 'blue',
                                    img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                }}
                                message={item.content}
                            />
                        )
                    })}
                </div>
                <EntryCommunication keySend={this.getInfo.bind(this)} ref="message" />
            </div>
        )
    }
    componentDidMount() {
        let id = decodeURIComponent(escape(window.atob(this.props.match.params.id))).replace(/\+link$/g, '');
        this.jsonLoad(id);
    }
    async jsonLoad (id) {
        // let { json } = await callApi(`http://172.16.1.69:7300/mock/5bf60e808639da0a80f7938b/chatListAll?id=${id}`);
        // this.setState({
        //     id: json.data.id,
        //     list: json.data.list
        // });
        // this.props.dispatch(FixedPage(json.data.name));
        // console.log(json);
    }
    getInfo() {
        console.log(this.refs.message);
        this.refs.message.input.value = '';
        this.sendMessage(this.refs.message.state.value);
        // this.refs.message.emitEmpty();
        setTimeout(()=>{
            this.refs.message.emitEmpty(); // 延迟 清空回车 \n
        }, 0)
    }
    async sendMessage (message) {
        // let { json } = await callApi(`localhost:8000/message?m=${message}`);
        /**
         * 模拟
         */
        let json = {ok: 200};
        if (json.ok === 200) {
            let list = this.state.list.concat();
            console.log(list);
            list.push({
                target: 0,
                type: 'normal',
                content: message
            });
            this.setState({
                ...this.state,
                list
            })
        }

    }
}

export default connect()(ChatMain)
