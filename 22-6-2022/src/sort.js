function Sort(){

 
    var arr = ['Z', 'A' ,'Q', 'B', 'C', 'Y' ,'S', 'W' ] ;
  
    var arr2 =arr.sort((a,b)=> a > b ?1:-1) ;
  
    return(
    
        <div>
    
            {
            arr2.map((val)=><li>{val}</li>)
         
            }
        </div>
    )
    
    }
    export default Sort ;