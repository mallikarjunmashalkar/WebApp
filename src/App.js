import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
import Navbar from "./component/Navbar";
import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Contact from "./component/Pages/Contact";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cal from "./component/Cal";
import { GetStarted } from "./component/Pages/GetStarted";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route  element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="getstarted" element={<GetStarted />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Cal/> */}
    </div>
  );
}

export default App;
