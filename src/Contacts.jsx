import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Contact from "./Contact";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        getAllUsers();
      },[])

    async function getAllUsers () {
        const data = (await fetch("http://localhost:3001/users")).json();
        const users = await data;
        setContacts(users);
    }

    const deleteContact= (id) => {
      fetch(`http://localhost:3001/users/${id}`, { 
        method: 'DELETE' 
      }) 
      .then(() => { 
        console.log('Item deleted'); 
        getAllUsers();
      }) 
      .catch(error => console.error('Error:', error));
    }
    
    return (
      
      <div>
        <Box className = "contacts"
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
        gap: 2,
      }}
    >
       {
          contacts && contacts.map((contact)=>{
          return(<Contact contact={contact} key={contact.id} deleteContact={(id)=>deleteContact(id)}/>)
        })
      }
      </Box>

      <Link to='/addnewcontact'>
        <Button
          variant="contained"
          fullWidth
        >
          ADD NEW CONTACT
        </Button>
      </Link>
      </div>
    )
}
