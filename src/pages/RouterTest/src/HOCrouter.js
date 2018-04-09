// 暂无使用
import React from 'react';

function HOCrouter (RouterItem) {
  return class extends React.Component {
    constructor (props) {
      super(props);
    }
    
    render () {
      return (
        <RouterItem data={this.state.data} {...this.props}/>
      );
    }
  };
}

export default HOCrouter;
