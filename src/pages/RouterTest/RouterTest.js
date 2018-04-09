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
  
  hanldePush (pathPar) {
    this.props.history.push(`${pathPar}/AuthC`, {info: '来自RouterTest的私货'});
  }
  
  render () {
    let pathPar = this.props.match.url;
    
    return (
      <div className="RouterTest">
        <h2>路由各种</h2>
        
        <Link to={`${pathPar}/AuthA`}>跳到AuthA</Link>
        <br/>
        <Link to={`${pathPar}/AuthB`}>跳到AuthB-->路由鉴权</Link>
        <br/>
        <button onClick={e => this.hanldePush(pathPar)}>不用Link跳转路由</button>
        <br/>
        <Link to={`${pathPar}/AuthD`}>跳到AuthD-->History Block</Link>
        <div className="demoBlock">
          <RouterView pathPar={pathPar}/>
        </div>
      </div>
    );
  }
}

export default RouterTest;
