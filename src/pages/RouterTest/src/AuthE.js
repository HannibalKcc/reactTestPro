import React from 'react';

class AuthE extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className='AuthE'>
        这是一个神奇的异步组件！（也是异步路由，因为它直接挂载在 &lt;Route/&gt;上面）
        <div><strong>注意：查看network js资源加载详情以验证</strong></div>
      </div>
    );
  }
}

export default AuthE;
