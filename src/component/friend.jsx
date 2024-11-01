import { useEffect } from "react";
import { useState } from "react";



const UserComponent = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Fetch Data:${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  const styles={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '12px auto',
    padding: '20px',
    border:'2px solid purple',
    listStyle: 'none',
    boxSizing: 'border-box',
    borderRadius:'15px',
  
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  }


  return <div>
    {error &&<p>Error:{error}</p>}
    {users.length===0?(<p>Loading .......</p>):(<ul style={{border:'2px solid red', padding:'15px'}}>
    {users.map((user)=>(<li style={styles} key={user.id}>
           
            <div className=".box">
            <h4>name: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h5>Address City: {user.address.city}</h5>
            <h5>Address Street: {user.address.street}</h5>
            </div>
            </li>))}
    </ul>)}
  </div>;
};

export default UserComponent;
