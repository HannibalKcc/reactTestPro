import React from 'react';

class AuthD extends React.Component {
  constructor (props) {
    super(props);
    this.state = {fnUnblock: null};
  }
  
  componentDidMount () {
    console.log(this);
  }
  
  handleBlock () {
    this.setState({fnUnblock: this.props.history.block('哈哈，你已经被我Block了！')});
  }
  
  handleUnblock () {
    this.state.fnUnblock();
  }
  
  render () {
    return (
      <div className='AuthD'>
        <button onClick={e => this.handleBlock()}>Block启动!</button>
        <button onClick={e => this.handleUnblock()}>关闭Block</button>
      </div>
    );
  }
}

export default AuthD;
