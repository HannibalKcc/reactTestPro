import React from 'react';

class AuthA extends React.Component {
  constructor (props) {
    super(props);
    this.handleConsole = this.handleConsole.bind(this);
    
    console.log('AuthA had constructor');
  }
  
  componentDidMount () {
    console.log('AuthA did mount');
  }
  
  componentWillUnmount () {
    console.log('AuthA will Unmount');
  }
  
  handleConsole () {
    console.log('handle-authA-btn');
  }
  
  render () {
    return (
      <div className="AuthA">
        这是公共页面，不需要权限访问
        <button onClick={this.handleConsole}>触发console</button>
      </div>
    );
  }
}

export default AuthA;
