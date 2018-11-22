import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ChatMain.sass';
import { callApi } from '../http/fetch'
import {FixedPage} from "../actions/NavTag";

class ChatMain extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: -1
        }
    }
    render() {
        return (
            <div className="ChatMain">{'目标 : '+this.state.id}</div>
        )
    }
    componentDidMount() {
        let id = decodeURIComponent(escape(window.atob(this.props.match.params.id))).replace(/\+link$/g, '');
        const promise = this.jsonLoad(id);
        console.log(promise)
    }
    async jsonLoad (id) {
        let { json } = await callApi('http://172.16.1.69:7300/mock/5bf60e808639da0a80f7938b/chatListAll', {id: id});
        this.setState({
            id: id
        });
        this.props.dispatch(FixedPage(json.data.name));
        console.log(json);
    }
}

export default connect()(ChatMain)
