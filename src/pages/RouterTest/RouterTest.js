import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import AuthA from './src/AuthA';
import AuthB from './src/AuthB';

// 参考文档 https://reacttraining.com/react-router/web/example/basic
class RouterTest extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props.match);
  }

  render () {
    return (
      <div className="RouterTest">
        <Link to={`${this.props.match}/AuthA`}>AuthA</Link>
        <Link to={`${this.props.match}/AuthB`}>AuthB</Link>
        <hr/>

        <h3>路由鉴权</h3>
        <div className="demoBlock">
          <Router path={`${this.props.match}/AuthA`} component={AuthA}></Router>
          <Router path={`${this.props.match}/AuthB`} component={AuthB}></Router>
        </div>
      </div>
    );
  }
}

export default RouterTest;
