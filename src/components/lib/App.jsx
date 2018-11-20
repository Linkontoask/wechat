import React, { Component } from 'react';
import '../style/App.css';

/**
 * 视图UI入口
 * wechat组件化 , 细分达到低耦合
 */
import NavTag from './NavTag'

class App extends Component {
    render() {
        return (
          <div className="App">
              <NavTag></NavTag>
          </div>
        );
    }
}

export default App;
