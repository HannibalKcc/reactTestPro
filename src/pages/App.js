import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import RouterView from '@/components/RouterView';
import {rawRouterList} from '@/router/index';
import s from './App.css';

class AppComponent extends React.Component {
  render () {
    return (
      <Router>
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
