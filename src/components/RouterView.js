import React from 'react';
import {Route} from 'react-router-dom';

import routerList from '../router';

class RouterView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <React.Fragment>
        {routerList.map(item => (
          <Route key={item.path} component={item.component} path={item.path}></Route>
        ))}
      </React.Fragment>
    );
  }
}

export default RouterView;
