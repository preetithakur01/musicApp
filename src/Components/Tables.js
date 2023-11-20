import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Grid from "@mui/material/Grid";
// import PlusIcon from "@mui/icons-material/AddSharp";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function HomeHeader({ sendDataToParent }) {
  const [open, setOpen] = useState(false);

  const [submittedData, setSubmittedData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    id: uuidv4(),
    Songname: "",
    Singer: "",
    Movie: "",
    audioFile: "",
    audioPath: "",
  });

  // console.log(formData.audioFile)

  const [editingRow, setEditingRow] = useState(null);

  const handleInputChange = (event) => {
    // console.log(event);
    const { name, value, type } = event.target;
    console.log(name, value, type);
    if (type === "file") {
      const file = event.target.files[0];
      console.log(file);
      setFormData({
        ...formData,
        audioFile: file,
        audioPath: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const resetFormData = () => {
    setFormData({
      id: uuidv4(),
      Songname: "",
      Singer: "",
      Movie: "",
      audioFile: null,
    });
  };
  const handlesubmit = (event) => {
    console.log(formData);
    setSubmittedData(formData);
    sendDataToParent(formData);
    setFormData({
      id: uuidv4(),
      Songname: "",
      Singer: "",
      Movie: "",
      audioFile: "",
      audioPath: "",
    });
    console.log(submittedData);
    handleClose();
  };



  const navigate = useNavigate();
  return (
    <>
      <div className="image">
        <Box className="header2" sx={{ flexGrow: 1, marginTop: 0 }}>
          <AppBar position="static">
            <Toolbar>
              <Button
                onClick={handleClickOpen}
                size="small"
                edge="center"
                color="inherit"
                aria-label="open drawer"
                sx={{ m: 0, fontSize: "1rem", backgroundColor: "black" }}
              >
                UPLOAD SONG
              </Button>

              <Button
                variant="contained"
                edge="center"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 165, backgroundColor: "black" }}
                onClick={() => navigate("/LogIn")}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            UPLOAD SONG
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

          <Grid
            container
            spacing={2}
            sx={{
              padding: 2,
            }}
          >
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Song Name"
                variant="outlined"
                name="Songname"
                fullWidth
                value={formData.Songname}
                onChange={handleInputChange}
                // onClick={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Singer"
                variant="outlined"
                fullWidth
                name="Singer"
                value={formData.Singer}
                onChange={handleInputChange}
                // onClick={(e) => setSinger(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Movie"
                variant="outlined"
                fullWidth
                name="Movie"
                value={formData.Movie}
                onChange={handleInputChange}
                // onClick={(e) => setMovie(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <input
                type="file"
                name="audioFile"
                value={formData.audioPath}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                id="outlined-basic"
                variant="outlined"
                fullWidth
                onClick={handlesubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </div>
      {/* </form> */}
    </>
  );
}
