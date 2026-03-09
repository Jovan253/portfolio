import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WorkIcon from "./components/WorkIcon";
import Home from "./pages/Home";
import Certifications from "./pages/Certs";
import About from "./pages/About";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <WorkIcon />

        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/certs" element={<Certifications />}/>
            {/* <Route /> */}
          </Routes>
        </div>
      </div>
    </Router>    
  );
}

export default App;
