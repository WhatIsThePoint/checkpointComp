import React from 'react';
import './App.css';
import "./components/adress";
import "./components/name";
import "./components/pphoto";
import Pphoto from "./components/pphoto";
import Name from   "./components/name";
import Adress from  "./components/adress";

const App = () => {
 return (
   <>
  <div className="card" >
<Pphoto/>
<Name/>
<Adress/>
  </div>
   </>
 );
};

export default App;