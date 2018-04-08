import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import routerList from '../router';

class RouterView extends React.Component {
  constructor (props) {
    super(props);
  }
  
  isPass (item) {
    if (item.requireLogin) {
      return localStorage.getItem('login');
    }
    return true;
  }
  
  render () {
    // 保留相关路由，以防包含自身路由形成死循环
    let resList = routerList.filter((item) => {
      if (!this.props.pathPar || this.props.pathPar === '/') {
        return item.path.substr(1).search(/\//) === -1; // search无法执行g全局搜索
      } else {
        return item.path.match(this.props.pathPar) && item.path !== this.props.pathPar; // 去除父节点本身，避免重复构造
      }
    });
    
    return (
      <React.Fragment>
        {resList.map(item => (
          <Route path={item.path} key={item.path}
                 render={props =>
                   this.isPass(item)
                     ? (<item.component {...props}/>) // 传递match
                     : (<Redirect to={{pathname: '/RouterTest/Login', state: {from: props.location}}}/>)
                 }
          />
        ))}
      </React.Fragment>
    );
  }
}

export default RouterView;
