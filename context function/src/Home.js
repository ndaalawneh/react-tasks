
import React from "react";
import { useContext } from "react";
import { Context } from "./App";

function Home(){

const name = useContext(Context) ;

    return (

        <div>
            <h1>Hello{name} </h1>
        </div>
    );



}

export default Home ;

