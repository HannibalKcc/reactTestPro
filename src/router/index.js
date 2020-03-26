import Loadable from 'react-loadable';

import NotMatch from '../components/NotMatch';
import LoadingCom from '../components/LoadingCom';

import HelloScss from '../pages/HelloScss';
import FromTest from '../pages/FromTest';
import Tree from '../pages/Tree/Tree';
import RouterTest from '../pages/RouterTest/RouterTest';
import AuthA from '../pages/RouterTest/src/AuthA';
import AuthB from '../pages/RouterTest/src/AuthB';
import AuthC from '../pages/RouterTest/src/AuthC';
import AuthD from '../pages/RouterTest/src/AuthD';
import Login from '../pages/RouterTest/src/Login';
import TestReactHook from '../pages/TestReactHook/TestReactHook';

const AuthE = () => import('@/pages/RouterTest/src/AuthE'); // 异步写法

const rawRouterList = [
  {
    path: '/HelloScss',
    component: HelloScss
  },
  {
    path: '/FromTest',
    component: FromTest
  },
  {
    path: '/Tree',
    component: Tree
  },
  {
    path: '/RouterTest',
    component: RouterTest,
    child: [
      {path: 'AuthA', component: AuthA},
      {path: 'AuthB', component: AuthB, requireLogin: true},
      {path: 'AuthC', component: AuthC},
      {path: 'AuthD', component: AuthD},
      {
        path: 'AuthE',
        component: asyncCom(AuthE)
      },
      {path: 'Login', component: Login}
    ]
  },
  {
    path: '/TestReactHook',
    component: TestReactHook
  },
  {
    // 一定要放在最后，而且搭配<Switch/>使用
    path: '/404',
    component: NotMatch
  }
];

/**
 * fn copy 深度拷贝
 * @param {obj，arr}
 * @return {obj}
 */
function copy (aObject) {
  var bObject, v, k;
  bObject = Array.isArray(aObject) ? [] : {};
  for (k in aObject) { // 无法遍历出不可枚举属性
    v = aObject[k];
    bObject[k] = (typeof v === 'object') ? copy(v) : v;
  }
  return bObject;
}

/**
 * fn flat 数据扁化，递归取出所有的child并按顺序返回
 * @param {arr}
 * @param {string}
 * @return {Loadable}
 */
function flat (tar, parPath = '') {
  let result = [];
  if (Array.isArray(tar)) {
    tar.forEach(item => {
      result = [...result, ...flat(item, parPath)];
    });
  } else {
    let o = copy(tar);
    Reflect.deleteProperty(o, 'child');
    Reflect.set(o, 'path', (parPath ? `${parPath}/` : '') + o.path);
    result.push(o);
    if (tar.child) result = [...result, ...flat(tar.child, o.path)];
  }
  return result;
}

/**
 * fn asyncCom 组件异步化
 * @param {fn} 一个函数，返回import()的执行结果
 * @return {obj}
 */
function asyncCom (fn) {
  if (typeof fn !== 'function') throw new Error('param: fn is not a function!');
  return Loadable({
    loader: fn,
    loading: LoadingCom
  });
}

const routerList = flat(rawRouterList);

export {rawRouterList};
export default routerList;
