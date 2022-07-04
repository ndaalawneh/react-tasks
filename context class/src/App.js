
import React, { createContext } from "react";
import Home from "./Home";

export const Context = createContext();


export class App extends React.Component{

state={

  name: "nada" ,

}


render(){


return(
<Context.Provider value={this.state}>
<Home></Home>
</Context.Provider>


);
}

}
