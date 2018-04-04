import React from 'react';

class AuthA extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="AuthA">
        这是公共页面，不需要权限访问
      </div>
    );
  }
}

export default AuthA;
