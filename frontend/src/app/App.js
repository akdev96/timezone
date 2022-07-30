import React from "react";
import {Routes,Route} from "react-router-dom";
import HomePage from "../pages/Home";

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
    </Routes>
  )
}

export default App;
