
import React from "react";

import { Context } from "./App";

export default class Home extends React.Component{

render(){

    return(

<Context.Consumer>

{
    (abood)=>abood.name 

    //abood => this.state (that exist in App)

}

</Context.Consumer>


    );
}

}


