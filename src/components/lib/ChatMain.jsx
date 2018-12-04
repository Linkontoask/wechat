import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/ChatMain.sass';
import { callApi } from '../http/fetch'
import {FixedPage} from "../actions/NavTag";
import Hammer from 'react-hammerjs'
import { LineCose } from "./base/LineCose";
import EntryCommunication from './EntryCommunication';
import $ from 'jquery'
import {ShowScreen, PositionCurrent, ChatMainPos, RouterLeft} from "../actions/NavTag";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import emitter from '../http/ev'

class ChatMain extends Component{
    constructor(props) {
        super(props);
        this.scale = 1;
        this.isHandelMove = false;
        this.state = {
            id: -1,
            list: [],
            left: 0,
            zIndex: 3,
            isTransit: false,
            isBack: false,
            clientWidth: 0
        }
    }
    handelStart(e) {
        e.preventDefault();
        e.center.x > this.state.clientWidth / 2 ? this.isHandelMove = false : this.isHandelMove = true
    }
    sign(e) {
        e.preventDefault();

        this.refs.message.activeBlur();
        // console.log(e.velocityX)
        if (!this.isHandelMove) {
            return false;
        }
        if (e.velocityX >= 0.1 || e.deltaX >= 0) {
            this.setState({
                left: e.deltaX,
                isTransit: false
            })
        }
        if (this.state.left > 130) {
            this.setState({
                isBack: true
            })
        } else {
            this.setState({
                isBack: false
            })
        }
        this.props.dispatch(RouterLeft(Math.ceil(this.state.left * 0.7 - 230), false ));
        setTimeout(() => {
            this.scale = 1 - (this.state.left / this.state.clientWidth).toFixed(1);
            this.props.dispatch(PositionCurrent(this.scale));
        }, 0);
        if (this.state.left < 0) {
            this.setState({
                left: 0
            })
        }
    }
    handelEnd(e) {
        e.preventDefault();
        if (this.state.isBack) {
            this.setState({
                left: this.state.clientWidth,
                zIndex: -1,
                isTransit: true
            });
            this.props.dispatch(RouterLeft(0, true));
            this.props.dispatch(ChatMainPos('110%'));
            setTimeout(() => {
                // 动画完成改变状态
                this.props.dispatch(ShowScreen(false));
                this.props.dispatch(PositionCurrent(1));
                this.setState({
                    left: 0,
                    isTransit: false
                })
            }, 400);
            return true;
        }
        this.setState({
            left: 0,
            isTransit: true
        })
    }
    render() {
        return (
            <div className={`ChatMain ${this.state.isTransit && 'transit'}`} style={{transform: `translateX(${this.state.left}px)`, left: this.props.getState().left, zIndex: this.state.zIndex}}>
                <Hammer
                    onPanStart={this.handelStart.bind(this)}
                    onPan={this.sign.bind(this)}
                    onPanEnd={this.handelEnd.bind(this)}
                    options={{
                        direction: ['DIRECTION_LEFT', 'DIRECTION_RIGHT'],
                    }}
                >
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
                        <EntryCommunication keySend={this.getInfo.bind(this)} ref="message" />
                    </div>
                </Hammer>
            </div>
        )
    }
    componentDidMount() {
        // 获取屏幕宽度
        this.setState({
            clientWidth: $('.ChatMain')[0].clientWidth
        });
        emitter.addListener('getContactsList', id => {
            this.updateId(id);
        })
    }
    updateId(id) {
        this.setState({
            id,
            zIndex: 3
        });
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
        if (this.refs.message.state.value === '') return false;
        this.sendMessage(this.refs.message.state.value.replace(/\s/g, '\u00a0'));
        this.refs.message.emitEmpty();
        this.scrBottom()
    }
    scrBottom() {
        let node = $('.ChatContent');
        node.animate({scrollTop: node[0].scrollHeight - node[0].clientHeight} , 200);
    }
    async sendMessage (message) {
        // let { json } = await callApi(`localhost:8000/message?m=${message}`);
        /**
         * 模拟
         */
        let json = {ok: 200};
        if (json.ok === 200) {
            let list = this.state.list.concat();
            list.push({
                target: 0,
                type: 'normal',
                content: message
            });
            this.setState({
                ...this.state,
                list
            });
            setTimeout(() => {
                this.startMoveBottom()
            }, 10);
        }
    }
    startMoveBottom() {
        let node = $('.ChatContent');
        node.animate({scrollTop: node[0].scrollHeight - node[0].clientHeight} , 200);
    }
}

function connectState(state) {
    return {
        getState() {
            return state
        }
    }
}
ChatMain.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

export default connect(
    connectState
)(withCookies(ChatMain))
