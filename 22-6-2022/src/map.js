function Map(){

    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      

      return(

<table>

<tr>
    <th>id</th>
    <th>Name</th>
    <th>Color</th>
</tr>

{
Fruits.map(
    (val)=>
    <tr>
<td>{val.id}</td>
<td>{val.name}</td>
<td>{val.color}</td>
    </tr>
)

}

</table>
      )
}

export default Map ;