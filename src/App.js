import React from "react";
import logo from './logo.svg';
import './App.css';
import Assignment from "./Assignment"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import Question6 from "./Question6"
import Question7 from "./Question7"
import Question8 from "./Question8"
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
  <div className="App" >
   <Navbar></Navbar>
   <br></br>
   <Routes>
    <Route exact path="/" component={Assignment} />
    <Route exact path="/Question1" component={Question1} />
    <Route exact path="/Question2" component={Question2} />
    <Route exact path="/Question3" component={Question3} />
    <Route exact path="/Question4" component={Question4} />
    <Route exact path="/Question5" component={Question5} />
    <Route exact path="/Question6" component={Question6} />
    <Route exact path="/Question7" component={Question7} />
    <Route exact path="/Question8" component={Question8} />
  </Routes>
  </div>
  ); 
}


export default App;
