
import { createContext } from "react";
import Home from "./Home";

export const Context = createContext();



function App (){

   const name = "nada"

  return(

    <div>
      <Context.Provider value={name}>
    <Home></Home>
    </Context.Provider>
    </div>
  );
}


export default App ;