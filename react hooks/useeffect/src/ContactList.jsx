export default function UserList({contacts}) {
    return (
      <div> <table>
  <tr>
    <th>Name</th>
    <th>email</th>
    <th>phone number</th>
  </tr>
        {contacts.map((contact) => (
          
           

  <tr>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.phonenumber}</td>
    
  </tr>




          
        ))}</table>
      </div>
    );
  }