import React from 'react';

class NotMatch extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className='NotMatch'>
        hello,你所查找的地址<code>{location.pathname}</code>不存在！
      </div>
    );
  }
}

export default NotMatch;
