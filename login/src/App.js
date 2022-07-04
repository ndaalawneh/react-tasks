
import React, { useState } from "react";
import './App.css' ;

function App(){
  const [username , setUsername]=useState('');
  const [password , setPassword]= useState('');
  const [user , setUser] = useState({username : 'nada' , password:'abood'});
  const [message , setMessage]=useState('');
  const [islogin , setIslogin] = useState(false);


  const handlelogout=(e)=>{
    e.preventDefault();
    setIslogin(false);
    setMessage('you are logged out');
  }

  const handleSubmit =(e)=>{
    e.preventDefault();

    if( password===user.password && username===user.username){
      alert(' login successfully');
      setMessage('login successfully');
      setIslogin(true);

    }
    else{
      alert ('login failed' );
    }
  }


  return(
<>
{islogin ? <><h1>{message}</h1> <input type='submit' value='logout' onClick={handlelogout}/> </>:  

<>
      <h1>Login</h1>
      <form className="input"  onSubmit={handleSubmit}>

        <label>username</label>

        <input type="text" name="username" onChange={(e) => (setUsername(e.target.value))} value={username} /> 

        <label >password</label>

        <input type="password" name="Password" onChange={(e) => (setPassword(e.target.value))} value={password} />
         <input type="submit" value="Login" className="btn-login" />  

      </form>
    </>
}
</>


  );
}
export default App ;