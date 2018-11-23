import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ChatMain.sass';
import { callApi } from '../http/fetch'
import {FixedPage} from "../actions/NavTag";
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
                <EntryCommunication v-model={this.getInfo.bind(this)} />
            </div>
        )
    }
    componentDidMount() {
        let id = decodeURIComponent(escape(window.atob(this.props.match.params.id))).replace(/\+link$/g, '');
        const promise = this.jsonLoad(id);
        console.log(promise)
    }
    async jsonLoad (id) {
        let { json } = await callApi(`http://172.16.1.69:7300/mock/5bf60e808639da0a80f7938b/chatListAll?id=${id}`);
        this.setState({
            id: json.data.id,
            list: json.data.list
        });
        this.props.dispatch(FixedPage(json.data.name));
        console.log(json);
    }
    getInfo() {

    }
}

export default connect()(ChatMain)
