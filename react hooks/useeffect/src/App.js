import axios from "axios";
import { useEffect , useState} from "react";

function App(){
const [Data , setData]=useState([]);
const [Loading , setLoading]=useState(true);


useEffect(()=>{
axios('https://jsonplaceholder.typicode.com/users').then(
  (res) =>
  {setData(res.data)
    setLoading(false)
  }
  

)} 
)

return(

<div>
  <h1>Returned Data</h1>
<ul>
{Loading?<h1>Is loading</h1>: Data.map((item)=>(
  
  <li key={item.id}>{item.name}</li>

  
))}
</ul>
  

   
  
</div>
);



}

export default App ;