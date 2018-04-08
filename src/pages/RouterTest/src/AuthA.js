import React from 'react';

class AuthA extends React.Component {
  constructor (props) {
    super(props);
    this.handleConsole = this.handleConsole.bind(this);
  }
  
  handleConsole () {
    console.log('authA-btn');
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
