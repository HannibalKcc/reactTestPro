import React from 'react';

import s from './Tree.scss';
import TreeNode from './components/TreeNode.js';

class Tree extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={s["Tree-wrap"]}>
        <h3>构造树组件</h3>
        <div className="demoBlock">
          <TreeNode txt="胡汉三">
            <TreeNode txt="胡汉四"></TreeNode>
            <TreeNode txt="胡汉五">
              <TreeNode txt="胡汉重五">
                <TreeNode txt="胡汉重六"></TreeNode>
                <TreeNode txt="胡汉重六"></TreeNode>
              </TreeNode>
              <TreeNode txt="123胡汉重五"></TreeNode>
            </TreeNode>
          </TreeNode>
        </div>
      </div>
    );
  }
}

export default Tree;
