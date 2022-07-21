import {useSelector , useDispatch} from 'react-redux';
import {increment , decrement} from './actions/index' ;

function App() { 
  const counter = useSelector(state=>state.counter)
  const logged = useSelector(state=>state.logged)
  const dispatch= useDispatch();
  return (
  

    <div className="App">

     <h1>counter {counter}</h1>
     <button onClick={()=>dispatch(increment())}>Deposite</button>
     <button onClick={()=>dispatch(decrement())}>withdraw</button>

     {logged ? <h3>welcome</h3> : ''}
    </div>
  );
}

export default App;
