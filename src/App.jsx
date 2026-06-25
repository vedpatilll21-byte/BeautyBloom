import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import {Skincare} from  "./components/Skincare"
import { Makeup } from "./components/Makeup";
import {Addproduct} from "./components/Addproduct"
function Home() {
  return <Hero />;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
       

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/makeup" element={<Makeup />} />
         <Route path="/Addproduct" element={<Addproduct />} />
        

        
      </Routes>
    </>
  );
}

export default App;
