import React from 'react';

import s from './TreeNode.scss';

class TreeNode extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ul className={s["TreeNode"]}>
        <span>{this.props.txt}</span>
        <div className={s["li-box"]}>
          {Array.isArray(this.props.children) && this.props.children.map((item, index) => (
            <li key={index} className={s["li-item"]}>
              {item.props.txt}
              <TreeNode>{item.props.children}</TreeNode>
            </li>
          ))}
        </div>
      </ul>
    );
  }
}

export default TreeNode;
