import React from 'react';

class AuthB extends React.Component {
  constructor (props) {
    super(props);

    this.hanldeGetAuth = this.hanldeGetAuth.bind(this);
  }

  hanldeGetAuth () {

  }

  render () {
    return (
      <div className="AuthB">
        这个页面需要权限才能访问
        <button onClick={this.hanldeGetAuth}>获取权限</button>
      </div>
    );
  }
}

export default AuthB;
