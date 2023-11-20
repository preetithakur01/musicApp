import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/Login";
import Tables from "./Components/SongsTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="mt-40"></div>
        <div className="pt-30"></div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/table" element={<Tables />}></Route>

          {/* <Route exact path="/LogIn" element={<LogIn />} /> */}
          {/* <Route exact path="/LogIn" element={<LogIn />} /> */}
          {/* <Route exact path="/MusicEdit" element={<MusicEdit />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
