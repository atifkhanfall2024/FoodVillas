
import React from "react";


class Increment extends React.Component{

    constructor(props){
        super(props)

        // init

        this.state = {
            count : 0
        }
    }

    increase = ()=>{
        this.setState({count:this.state. count+1})
    }

    render(){
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick={this.increase} >click Me</button>
            </>
        )
    }
    
}

export default Increment