import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import '../style/App.css';

/**
 * 视图UI入口
 * wechat组件化 , 细分达到低耦合
 */
import NavTag from './NavTag'
import ChatList from './ChatList'
import NavState from './NavState'
import ContactsList from './ContactsList'
import Setting from './Setting'
import Friends from './Friends'
const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavState />
                <Router history={customHistory}>
                    <Switch>
                        <Route exact path="/" component={ChatList}/>
                        <Route path="/contacts" component={ContactsList}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/setting" component={Setting}/>
                    </Switch>
                </Router>
                <NavTag history={customHistory} />
            </div>
        );
    }
}

export default App;
