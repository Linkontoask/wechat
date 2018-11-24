import React, { Component } from 'react';
import { Router, Route, Switch} from 'react-router'
import createBrowserHistory from "history/createBrowserHistory";
import { connect } from 'react-redux';
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
import ChatMain from './ChatMain'
const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavState history={customHistory} />
                <div className={`MainContent  ${this.props.isScreen().value ? 'hidden' : 'show'}`}>
                    <Router history={customHistory}>
                        <Switch>
                            <Route exact path="/" component={ChatList}/>
                            <Route path="/contacts" component={ContactsList}/>
                            <Route path="/friends" component={Friends}/>
                            <Route path="/setting" component={Setting}/>
                        </Switch>
                    </Router>
                </div>
                <ChatMain />
                <NavTag history={customHistory} zIndex={this.props.isScreen().value ? 1 : 2} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isScreen() {
            return state;
        }
    }
};

export default connect(
    mapStateToProps,
)(App);
