import React from 'react';
import {Link} from 'react-router-dom';

import RouterView from '@/components/RouterView';

// 参考文档 https://reacttraining.com/react-router/web/example/basic
class RouterTest extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    console.log('routerTest的props:', this.props);
  }
  
  render () {
    let pathPar = this.props.match.url;
    
    return (
      <div className="RouterTest">
        <h3>路由鉴权</h3>
        <hr/>
        <Link to={`${pathPar}/AuthA`}>跳到AuthA</Link> <br/>
        <Link to={`${pathPar}/AuthB`}>跳到AuthB</Link>
        
        <div className="demoBlock">
          <RouterView pathPar={pathPar}/>
        </div>
      </div>
    );
  }
}

export default RouterTest;
