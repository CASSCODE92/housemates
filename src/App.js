import React from 'react';
import logo from './logo.svg';
import './App.css';
import { response } from 'express';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// //////////////////////////////////
// 
// 

const express= require ("express");
const https= require ("https");
const app= express();

app.get("/", function (req, res){
  res.send("server is up & running.")

  response.on("data", function(data){
    const event= {
      



    }
    // console.log(JSON.stringify(event));



  }
  
  
  
  
  
  
  
  )


  app.listen(3004, function(){
    console.log("Server is running on port 3004.");


  }
  
  )


}




)

export default App;
