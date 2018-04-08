import React from 'react';

class AuthB extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleLoginOut = this.handleLoginOut.bind(this);
  }
  
  handleLoginOut () {
    localStorage.removeItem('login');
  }
  
  render () {
    return (
      <div className="AuthB">
        hi，这里是页面B（看到这个页面代表你已经获取了权限）
        <button onClick={this.handleLoginOut}>注销权限</button>
      </div>
    );
  }
}

export default AuthB;
