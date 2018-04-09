import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import RouterView from '@/components/RouterView';
import {rawRouterList} from '@/router/index';
import s from './App.css';

class AppComponent extends React.Component {
  async routerDialog (msg, cb) {
    let res = false;
    console.log('msg:' + msg, '1.5s后路由才会跳转哦');
    await new Promise((resolve) => setTimeout(() => {
      // 这里设置自定义弹窗 并且处理cb
      console.log('res changed! 路由已经跳转。');
      res = true;
      resolve();
    }, 1500));
    cb(res);
  }
  
  render () {
    return (
      <Router getUserConfirmation={this.routerDialog}>
        <div className={s["app-wrap"]}>
          <h1 className={s["txt"]}>从vue到react到死亡~</h1>
          <div className={s["ctx-wrap"]}>
            <ul className={s["router-list"]}>
              {rawRouterList.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.path}</Link>
                </li>
              ))}
            </ul>
            <div className={s["router-view"]}>
              <RouterView/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
