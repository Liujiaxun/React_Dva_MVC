import Core from '../../Core';
import Model from './model'
import Musichall from './component'

const Config = (app) => ({
    path:'/musichall',
    title:'音乐馆',
    component:Core.createNewDynamicWapper(app,[Model],()=>Musichall)
})

export default app => Core.createNewRouter(app,Config);
