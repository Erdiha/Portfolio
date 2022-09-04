import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Work from "./components/Work";
function App() {
  const [getName,setGetName] =useState("home")
  const [showContact,setShowContact] = useState(false);
  return (
    <div className="App">
      <div id="navbar"><Navbar 
        getName ={setGetName} 
        showContact ={showContact} 
        setContact={setShowContact}
      /></div>
      <div id="home"><Home 
        getName ={getName}
        setName ={setGetName} 
        showContact ={showContact} 
        setContact={setShowContact} 
       /></div>
      <div id="work"><Work 
        getName={getName}  
        showContact ={showContact} 
        setContact={setShowContact}  
      /></div>
      <div id="footer" className="footer-main">
            <Footer showcontact={showContact} />
        </div>
    </div>
  );
}

export default App;
