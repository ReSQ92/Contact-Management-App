import './App.css';
import Contact from './Contact';
import { use, useEffect, useState } from 'react';
import Tasks from './Tasks';
import { Container } from '@mui/material';
import Box from "@mui/material/Box";
import Navbar from './Navbar';

function App() {

  const [contacts, setContacts] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(()=>{
    getAllUsers();
    getAllTasks();
  },[])

  async function getAllUsers () {
    const data = (await fetch("http://localhost:3001/users")).json();
    const users = await data;
    setContacts(users);
  }

  async function getAllTasks() {
    const allT = (await fetch("http://localhost:3001/tasks")).json();
    const t = await allT;
    setAllTasks(t);
  }


  // return (
  //   <div>
  //     {
  //       contacts && contacts.map((contact)=>{
  //         return(<Contact contact={contact}/>)
  //       })
  //     }
      
  //   </div>
  // );
  return (
    <Container fixed>
      <Navbar/>
      <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(250px, 100%), 1fr))',
        gap: 2,
      }}
    >
       {
          contacts && contacts.map((contact)=>{
          return(<Contact contact={contact}/>)
        })
      }
      </Box>
    </Container>
  )
}

export default App;
