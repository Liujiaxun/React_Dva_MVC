import Layout from './Layout';
import MusicHall from './MusicHall';
import Core from '../Core'
const RouterConfig = (app) =>([
  {
    path:'/',
    title:'首页',
    component:Layout,
    indexRouter:'/musichall',
    childrenRouters:[
      MusicHall(app)
    ]
  }
])

export default app => Core.createNewRouters(app,RouterConfig);