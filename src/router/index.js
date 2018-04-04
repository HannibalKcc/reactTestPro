import HelloScss from '../pages/HelloScss';
import FromTest from '../pages/FromTest';
import Tree from '../pages/Tree/Tree';
import RouterTest from '../pages/RouterTest/RouterTest';
import AuthA from '../pages/RouterTest/src/AuthA';
import AuthB from '../pages/RouterTest/src/AuthB';

const rawRouterList = [
  {
    path: '/'
  },
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
      {path: 'AuthB', component: AuthB}
    ]
  }
];

function copy (aObject) {
  var bObject, v, k;
  bObject = Array.isArray(aObject) ? [] : {};
  for (k in aObject) { // 无法遍历出不可枚举属性
    v = aObject[k];
    bObject[k] = (typeof v === 'object') ? copy(v) : v;
  }
  return bObject;
}

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

const routerList = flat(rawRouterList);

export {rawRouterList};
export default routerList;
