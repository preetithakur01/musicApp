import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material/';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {


    const navigate = useNavigate();

    const paperStyle = { padding: '30px 20px', width: 450, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: "#1976d2" }
    const marginTop = { marginTop: 15 }

    const [inputs, setInputs] = useState({
        fName: "",
        phone: "",
        email: "",
        password: ""

    })

    const { fName, email, password, phone } = inputs

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }


 

    const handleSubmit = async (e) => {
        e.preventDefault();
    const response =await axios.post("http://localhost:8000/postdata",{
        fName: fName,
        email: email,
        phone: phone,
        password: password

    },{headers:{
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4NzQ0ODFlZTFjMDEyZGMxZTIyZjhiIn0sImlhdCI6MTY1MzAzMjA2NX0.5_sx4qyJK87lt_NYDutk0NpzNxQRPqw5J42zZkWbxB0'
    }} ) ;
 
   
      navigate("/login")
      console.log(response.jwtData)
    };

    return (
        <Grid style={{ marginTop: "40px" }}>

            <div className="mt-30">
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>

                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    </Grid>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            placeholder="Enter your name"
                            label='name'
                            onChange={handleChange}
                            name="fName"
                            required={true}
                            value={inputs.fName}
                            fullWidth
                            type="text"
                            style={marginTop}
                        />

                        <TextField
                            fullWidth
                            label='email'
                            placeholder="Enter your Email"
                            style={marginTop}
                            type="email"
                            required={true}
                            onChange={handleChange}
                            name="email"
                            value={inputs.email}
                        />

                        <TextField
                            fullWidth
                            label='phone'
                            placeholder="Enter Phone Number"
                            style={marginTop}
                            required={true}
                            type="text"
                            onChange={handleChange}
                            name="phone"
                            value={inputs.phone}
                        />



                        <TextField
                            label='Password'
                            placeholder="Enter your password"
                            style={marginTop}
                            fullWidth
                            onChange={handleChange}
                            name="password"
                            required={true}
                            type="text"
                            value={inputs.password}
                        />

                        <Button type='submit' variant='contained' color='primary' style={marginTop}>Sign up</Button>
                    </form>
                </Paper>
            </div>
        </Grid>
    )
}

export default Signup;