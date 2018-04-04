import 'core-js/fn/object/assign';
import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './pages/App';
import './assets/css/reset.scss';

// Render the main component into the dom
ReactDOM.render(<App/>, document.getElementById('app'));

export default hot(module)(App); // 热加载的关键
