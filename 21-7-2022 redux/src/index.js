import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createStore} from 'redux';
import all from './reducers/index';
import {Provider} from 'react-redux';





//Action//

//  const increment = () => {
//   return {
//      type: 'INCREMENT'
//   }
// }


// const decrement = () => {
//   return {
//      type: 'DECREMENT'
//   }
// }
 

//reducer//

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//      case 'INCREMENT': return state + 1
//      case 'DECREMENT': return state - 1
    
//   }
// }




//store//

const store = createStore(all , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(()=>console.log(store.getState()));

//dispatch//

// store.dispatch(increment());
// store.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

