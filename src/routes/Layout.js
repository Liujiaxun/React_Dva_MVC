import React,{PureComponent} from 'react';
import {Switch} from 'dva/router'
import {connect} from 'dva';

class Layout extends PureComponent {
    render(){
        const {data} = this.props;
        const {childrenRouters} = data
        return (
            <Switch>
                {childrenRouters}
            </Switch>
        )
    }
}

export default connect()(Layout);
