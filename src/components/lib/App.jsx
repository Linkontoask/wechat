import React, { Component } from 'react';
import { Router, Route} from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import '../style/App.css';

/**
 * 视图UI入口
 * wechat组件化 , 细分达到低耦合
 */
import NavTag from './NavTag'
import ChatList from './ChatList'
import NavState from './NavState'
const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavState />
                <Router history={customHistory}>
                    <Route exact path="/" component={ChatList}/>
                </Router>
                <NavTag />
            </div>
        );
    }
}

export default App;
