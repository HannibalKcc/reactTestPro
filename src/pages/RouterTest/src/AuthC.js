import React from 'react';

class AuthC extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
  }
  
  render () {
    return (
      <div className='AuthC'>
        这里是AuthC，你是通过history.push跳转过来的
        <div>路由传递信息：
          <i style={{color: '#4390ff'}}>
            {this.props.location.state.info}
          </i>
        </div>
      </div>
    );
  }
}

export default AuthC;
