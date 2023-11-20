import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tables from "./Tables";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Dialog } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.grey,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 23,
    color: "black",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
 
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [open, setOpen] = React.useState(false);
  const [childData, setChildData] = React.useState([]);
  const [editingRow, setEditingRow] = useState(null);

  const [formData, setFormData] = useState({
    id: uuidv4(),
    Songname: "",
    Singer: "",
    Movie: "",
    audioFile: null,
  });

 

  useEffect(() => {
  }, [childData]);

  const handleInputChange = (event) => {
    console.log(event);
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0];
      setFormData({
        ...formData,
        audioFile: file ? file.name : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleChildData = (data) => {
    setChildData([...childData, data]);
  };

  const [tableData, setTableData] = useState([
    {
      id: uuidv4(),
      Songname: "",
      Singer: "",
      Movie: "",
      audioFile: "",
      audioPath: "",
    },
  ]);
  const handleOpen = (data) => {
    // console.log(data);
    setFormData(data);
    setEditingRow(data.id);
    setOpen(true);
  };

  const handleDelete = (idToDelete) => {
    
    const updatedData = childData.filter((row) => row.id !== idToDelete.id);
    setChildData(updatedData);
  };

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = () => {
    setSubmittedData(formData);

  };

  const handleSave = () => {
    const updatedData = childData.map((row) =>
      row.id === editingRow ? formData : row
    );

    setChildData(updatedData);
    setEditingRow(null);
    setOpen(false);
  };

  // console.log(childData);

  return (
    <>
      <Tables sendDataToParent={handleChildData} />
      <div
        style={{
          display: "flex",
          padding: "2rem",
          
          backgroundColor: "rgb(196 203 203)",
        }}
      >
        <TableContainer
          className="container-1"
          component={Paper}
          sx={{ marginTop: 0 }}
        >
          <Table>
            <TableHead component="div">
              <TableRow>
                <div
                  style={{
                    display: "flex",
                    color: "black",
                    fontSize: 18,
                    background: "grey",
                    padding: "1rem ",
                    border: 2,
                  }}
                >
                  <div style={{ flex: "18%" }}>Song Name</div>
                  <div style={{ flex: "18%" }}>Singer</div>
                  <div style={{ flex: "20%" }}>Movie</div>
                  <div style={{ flex: "18%" }}>file</div>
                  <div style={{ marginLeft: 2 }}>Actions</div>
                </div>
              </TableRow>
            </TableHead>
            <TableBody component="div">
              {childData?.map((row) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "black",
                    fontSize: 17,
                    background: "rgb(195 104 104 / 15%)",
                    padding: "0.3rem 1.3rem ",
                    border: "1px solid #ccc",
                  }}
                  key={row.name}
                >
                  <div style={{ flex: "18%" }}>{row.Songname}</div>
                  <div style={{ flex: "18%" }}>{row.Singer}</div>
                  <div style={{ flex: "13%" }}>{row.Movie}</div>
                  <div
                    style={{
                      flex: "17%",
                    }}
                  >
                    <audio controls>
                      <source
                        src={URL.createObjectURL(row.audioFile)}
                        type="audio/mp3"
                      />
                    </audio>
                    {row.audioPath}
                  </div>
                  <div style={{ marginLeft: 4 }}>
                    <Button
                      sx={{ marginRight: "1rem" }}
                      color="success"
                      variant="contained"
                      onClick={() => handleOpen(row)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="success"
                      variant="contained"
                      onClick={() => handleDelete(row)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog open={open}>
        {/* onSubmit={handleSubmit} */}
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Music Edit
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Grid container spacing={2}
          sx={{padding:2}}
        >
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name="Songname"
              label="Songname"
              variant="outlined"
              fullWidth
              value={formData.Songname}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name="Singer"
              label="Singer"
              variant="outlined"
              fullWidth
              value={formData.Singer}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              name="Movie"
              label="Movie"
              variant="outlined"
              fullWidth
              value={formData.Movie}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <input
              type="file"
              value={formData.audioFileaudioFile}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              id="outlined-basic"
              label="Movie"
              variant="outlined"
              type="submit"
              fullWidth
              // onClick={handleClose}
              onClick={handleSave}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import { Container, Grid } from '@mui/material';
// import AOS from 'aos';
// import SearchIcon from '@mui/icons-material/Search';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';

// import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import zIndex from '@mui/material/styles/zIndex';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 1),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 1),
//   },
//   marginLeft: 0,
//   width: '10%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: '180px',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',

//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize:"15px"
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: '#000',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',

//     [theme.breakpoints.up('sm')]: {
//       width: '9ch',
//       '&:focus': {
//         width: '20ch',

//       },
//     },
//   },
// }));

// export default function SongsTable() {

//   const theme = useTheme();

//   AOS.init({
//     duration: 1100
//   });
//   const [songs, setsongs] = useState([])

//   const [search, setsearch] = useState("")

//   useEffect(() => {
//     const getData = setInterval(() => {
//       axios.get('http://localhost:8000/getallsong', {
//         headers: {
//           'auth-token': JSON.parse(localStorage.getItem("auth-token"))
//         }
//       }).then(res => {
//         setsongs(res.data.songs)
//         console.log(res.data)
//       }).catch(err => {
//         console.log(err);
//       })

//     }, 1000);

//     return () => clearInterval(getData)
//   }, [])

//   const deletehandle = async (_id) => {
//     await axios.delete(`http://localhost:8000/delete/${_id}`)
//       .then((res) => {
//         console.log(res)
//       }).catch((err) => {
//         console.log(err)
//       })

//   }

//   // const[user,setUser]= useState([])

//   // const getAllUser =async (id)=>{
//   //           const getalluser= await axios.get(`http://localhost:8000/getalluser/${id}`)

//   //           setUser(getalluser)
//   //           console.log(getalluser.data + "hello")
//   //         }

//   return (
//     <>

//       {

//         songs.length === 0 ? <h3 style={{ marginTop: "100px", marginLeft: "200px" }}> Playlist is Empty ! Please Create Your Own PlayList  </h3> :

//           <Container maxWidth="xxl" sx={{ bgcolor: "#f9f9f9", mt: "90px", pb: "30px" }}>
//             <Container fixed>

//               <Search    style={{position:"absoulate",top:"-280px", zIndex:10000,left:'800px'}} >
//                 <SearchIconWrapper>
//                   <SearchIcon style={{ color: "#000",fontSize:'12px' }} />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search…"
//                   inputProps={{ 'aria-label': 'search' }}
//                   onChange={(event) => { setsearch(event.target.value) }}

//                 />
//               </Search>
//               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

//                 {songs && songs.filter((val) => {
//                   if (search === "") {
//                     return val
//                   } else if (
//                     val.image.toLocaleLowerCase().includes(search.toLocaleLowerCase())

//                   ) {
//                     return val
//                   }

//                 }).map((item) => (
//                   <Grid item xs={2} sm={4} md={4} key={item}>
//                     <div data-aos="fade-down">

//                       <Card sx={{ Width: "100%", height: "160px" }}>

//                         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//                           <CardContent sx={{ flex: '1 0 auto' }}>
//                             <Typography component="div" variant="h5">
//                               <p style={{ fontSize: "14px" }}>{item.image.slice(15, 40)}</p>
//                             </Typography>

//                           </CardContent>
//                           <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//                             <IconButton aria-label="previous">
//                               {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//                             </IconButton>
//                             <IconButton aria-label="play/pause">
//                               <PlayArrowIcon sx={{ height: 38, width: 38 }} />
//                             </IconButton>
//                             <IconButton aria-label="next">
//                               {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//                             </IconButton>

//                           </Box>
//                         </Box>
//                         <DeleteIcon onClick={() => deletehandle(item._id)} />
//                         <CardMedia
//                           component="img"
//                           style={{ width: "200px", height: "194px", position: "relative", top: "-186px", left: '185px' }}
//                           image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80"
//                           alt="Live from space album cover"
//                         />

//                       </Card>
//                     </div>
//                   </Grid>
//                 ))}
//               </Grid>

//             </Container>

//           </Container>
//       }
//     </>
//   );
// }
