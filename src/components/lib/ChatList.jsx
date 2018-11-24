import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowScreen , PositionCurrent, ChatMainPos} from '../actions/NavTag'
import '../style/ChatList.sass'
import SearchWechat from './base/Search'
import Hammer from 'react-hammerjs'
import Delete from './base/Delete'
import { Icon, List, Avatar } from 'antd'

class ChatList extends Component{
    deltaTime;
    additionalEvent;
    constructor(props) {
        super(props);
        this.state = {
            right: [],
            data: [
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
                {title: 'Ant Design Title 1',id: 0, type: 'normal'},
            ]
        }
    }
    render() {

        return (
            <div className={`ChatList`}>
                <SearchWechat />
                {this.state.data.length !== 0 && <div className="swiper-box">
                    {this.state.data.map((item,index)=>{
                        return (
                            <Hammer
                                onPanEnd={this.onLeft.bind(this, index)}
                                options={{
                                    direction: ['DIRECTION_LEFT', 'DIRECTION_RIGHT'],
                                }}
                                key={index}
                            >
                                <div className="swiper-item">
                                    <List.Item style={{left: this.state.right[index]}}>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={item.title}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            onClick={this.onTap.bind(this, item.id, item.type)}
                                        />
                                        <Delete handlDelete={ChatList.handlDelete.bind(this, index)} />
                                    </List.Item>
                                </div>
                            </Hammer>
                        )
                    })}
                </div>}
                {this.state.data.length === 0 && <div className="info-content"><Icon type="frown" style={{fontSize: 32, display: 'block', margin: '0 0 1rem'}} />暂时没有新信息</div>}
            </div>
        )
    }
    clearAll() {
        this.setState({
            data: [],
        })
    }
    onLeft(index, e) {
        this.Initialization();
        let arr = Object.assign([], this.state.right);
        if (e.additionalEvent === 'panleft') {
            if (-e.deltaX >= 100 || e.deltaTime <= 150) {
                arr[index] = -100
            } else {
                arr[index] = 0
            }
        } else {
            if (e.deltaX >= 100 || e.deltaTime <= 150) {
                arr[index] = 0
            } else {
                arr[index] = -100
            }
        }
        this.setState({
            right: arr,
        });
    }
    Initialization() {
        let arr = Object.assign([], this.state.right);
        arr = arr.map(()=>{return 0});
        this.setState({
            right: arr,
        });
    }
    onTap(id, type) {
        this.Initialization();
        // if (type === 'normal') this.props.history.push(`/chatInterface/${ChatList.enCode(id + '+link')}`);
        this.props.dispatch(ShowScreen(true));
        this.props.dispatch(PositionCurrent(1));
        this.props.dispatch(ChatMainPos(0));
    }
    static enCode(value) {
        return window.btoa(unescape(encodeURIComponent(value)));
    }
    static handlDelete(index) {
        // 移除之前的回调
        this.removeHandle(index);
        setTimeout(()=>{
            let data = Object.assign([], this.state.data);
            let right = Object.assign([], this.state.right);
            data.splice(index, 1);
            right.splice(index, 1);
            this.setState({
                data: data,
                right: right
            });
        }, 400);

        console.log(index)
    }
    removeHandle(index) {
        let arr = Object.assign([], this.state.right);
        arr[index] = '-140%';
        this.setState({
            right: arr
        });
    }
}

function connectState(state) {
    return {
        getState() {
            return state
        }
    }
}

export default connect(
    connectState
)(ChatList)
