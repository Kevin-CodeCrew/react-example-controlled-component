import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponentContainer from "./components/MainComponentContainer"


function App() {
  return (
    <BrowserRouter>
        <MainComponentContainer/>
    </BrowserRouter>
  );
}

export default App;
