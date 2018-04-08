import React from 'react';
import c from 'classnames/bind'; // 别忘了路径有bind

import style from './HelloScss.scss';

class HelloScss extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log(style);
  }

  render () {
    return (
      <div className={style.HelloScss}>
        <h3>通过css-loader与classnames来实现样式模块化</h3>
        <div className="demoBlock">
          hello World
          <div className={c.bind(style)('child', 'foo', 'bar')}>
            child
            <span>child span</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HelloScss;
