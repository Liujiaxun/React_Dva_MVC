import dynamic from 'dva/dynamic';
import { Route, Switch, Redirect } from 'dva/router';
/**
 * @param {dvaRoute}  app 回调函数 参数 app；
 * @param {dvaModel} models dva 注册model；
 * @param {component} component 组件（ui）；
 * @return {dynamic} dynamic dva封装的路由组件预加载 dynamic 配置参数种models必须写models 否则model注册无效
 */
export const createNewDynamicWapper = (app,models,component) => dynamic({
    app,models:()=>models,component
})

/**
 *  @param {dvaRoute}  app 回调函数 参数 app；
 *  @param {*} routers 需要创建路由的参数，一般为函数，返回数组
 */
export const createNewRouters = (app,routers) =>(
    <Switch>
        {
            routers(app).map(config => createNewRouter(app,()=>config)) 
        }
    </Switch>
)
/**
 * 
 * @param {dvaRoute} app dvaRoute 回调函数参数 app
 * @param {*} routerConfig  //创建router的参数
 */
export const createNewRouter = (app,routerConfig) => {
    const {path,title,indexRouter,component:Component,...otherProps} = routerConfig(app);
    if (path && path !== '/') {
        window.dva_router_pathMap[path] = { path, title, ...otherProps };
    }
    let config = {
        key:path || 'key_'+Math.random(),
        render:props => (<Component data={otherProps} {...props}/>)
    }
    if(path){
        config = {
          ...config,
          path
        }  
    }
    if(indexRouter){
        return [
            <Redirect key={path+'_redirect'} exact from={path} to={indexRouter} />,
            <Route {...config} />
        ];
    }
    return <Route {...config} />

}
