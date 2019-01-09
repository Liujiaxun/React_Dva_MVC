import React, { Component } from 'react';
import { connect } from 'dva' 

class Musichall extends Component{
    constructor(props){
        console.log(props)
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <div>
                Musichall
            </div>
        );
    }

}

export default connect(({musichall})=>{
    return {
        musichall
    }
})(Musichall);
