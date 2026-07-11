import { Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Skincare } from "./components/Skincare";
import { Makeup } from "./components/Makeup";
import { AddProduct } from "./components/AddProduct";
import Protected from "./Protected";

// ⚠️ IMPORTANT: If Hero.jsx does not exist in her components folder, 
// she MUST comment out this import and the <Route> below!
import { Hero } from "./components/Hero"; 

// A temporary Login component to stop the infinite loop crash
function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px", color: "white", fontFamily: "Arial" }}>
      <h2>Login Page</h2>
      <p>Please log in to access BeautyBloom.</p>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* 1. The actual Login route MUST exist here to stop the infinite loop */}
      <Route path="/login" element={<Login />} />
      
      {/* 2. Redirect root to login for unauthenticated users */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* 3. Everything else is protected */}
      <Route
        path="/*"
        element={
          <Protected>
            <Layout />
          </Protected>
        }
      />
    </Routes>
  );
}