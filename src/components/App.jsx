import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./today/Home" ; 
import TopNav from "./today/TopNav";
import Weekly from "./week/Weekly";



/* The `App` function is a React component that returns JSX (JavaScript XML) code. */
function App() {
  return (
    <div className="App">
      <div className="Container">
      <TopNav />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
