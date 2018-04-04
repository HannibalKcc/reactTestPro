import React from 'react';

import style from './NavTab.css';

class NavTab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      indexActived: 0
    };
  }

  render () {
    return (
      <div id="navTab" className={style.blue}>
        <span>测试样式局部性</span>
        <ul className="tab-list">
          {[1, 2, 3, 4].map((val) =>
            <li className="tab-item" key={val.toString()}>{val}</li>
          )}
        </ul>
        <div className="notice">1233425</div>
        <div dangerouslySetInnerHTML={{__html: '<h1>hello wolrd</h1>'}}></div>
      </div>
    );
  }
}

export default NavTab;
