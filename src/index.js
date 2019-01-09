import dva from 'dva';
import {Router} from 'dva/router'
import Routers from './routes'
// 1. Initialize
const app = dva();
window.dva_router_pathMap = [];
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(({history,app})=>(
    <Router history={history}>{Routers(app)}</Router>
));

// 5. Start
app.start('#root');
