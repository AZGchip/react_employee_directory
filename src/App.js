import React from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body"

//exports navbar and body
function App() {
  return (<div>
    <NavBar />
    <Body className="bg-dark"/>
  </div>);
}


export default App;
