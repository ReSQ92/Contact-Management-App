import './App.css';
import Tasks from './Tasks';
import { Container } from '@mui/material';
import Navbar from './Navbar';
import AddNewContact from './AddNewContact';
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Homepage from './Homepage';
import Contacts from './Contacts';

function App() {

  return (
    <BrowserRouter>
    <Container fixed>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path = '/addnewcontact' element={<AddNewContact />} />
      </Routes>
      <Outlet />
      
    </Container>
    </BrowserRouter>
  )
}

export default App;
