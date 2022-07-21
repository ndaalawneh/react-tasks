import reducer from "./counter";
import logged from "./islogged";
import {combineReducers} from 'redux';

const all = combineReducers({
    counter:reducer ,
    islogged:logged
})

export default all;