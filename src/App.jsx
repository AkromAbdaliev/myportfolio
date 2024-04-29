import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import MyWork from "./components/mywork/MyWork";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

// import React from 'react';
const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
    </div>
  )
}

export default App;