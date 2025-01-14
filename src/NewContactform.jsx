import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function NewContactform() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
  
    const handleAddItem = () => {
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          contactNumber: phoneNumber,
          address: address
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate('/contacts');
        setName('');
        setPhoneNumber('');
        setAddress('');
      })
      .catch(error => console.error('Error:', error));
    };

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <div>
            <TextField
                id="Name"
                label="Name" onChange={(e) => 
                    setName(e.target.value)}
            />
            </div>
            <div>
            <TextField
                id="Phone"
                label="Contact Number" onChange={(e) => 
                    setPhoneNumber(e.target.value)}
            />
            </div>

            <div>
            <TextField
                id="Address"
                label="Address" onChange={(e) => 
                    setAddress(e.target.value)}
                multiline
                maxRows={4}
            />
            </div>

            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddItem} 
            > 
                Add New Contact 
            </Button>
        </Box>
    )
}