import React from "react"

import './App.css';
import { Header } from "./components/Header";
import SearchCustomer from'./components/SearchCustomer';

const App = () => {
  return (
    <div>     
      <Header/> 
      <SearchCustomer/>
     
    </div>
  )
}

export default App;

