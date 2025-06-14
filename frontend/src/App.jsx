import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/login";
// import Main from "./components/mainpg";
import Dash from "./components/Dash";
// import LabTable from "./components/table";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/" element={<Dash />} />
        {/* <Route path="/table" element={<LabTable />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
