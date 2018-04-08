import React from 'react';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {redircet: false};
    
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin () {
    localStorage.setItem('login', 'true'); // 不能直接写bool类型
    this.setState({redircet: true});
  }
  
  render () {
    let {from} = this.props.location.state || {from: {pathname: "/"}};
    
    if (this.state.redircet) {
      return <Redirect to={from}/>;
    }
    
    return (
      <div className='Login'>
        {`你刚才访问的是${from.pathname}，该页面需要登陆权限才可以访问`}
        <button onClick={this.handleLogin}>点我登陆</button>
      </div>
    );
  }
}

export default Login;
