import { supabase } from "../supabase.js";
import { useEffect, useState } from "react";


export function Skincare() {
  const [skincareProduct, setskincareProduct] = useState([])
 useEffect(()=> {
    fetchskincareProduct();
  }, []);
  async function fetchskincareProduct() {
    const {data} = await supabase.from("products").select("*");            
setskincareProduct(data);
  }
  const skincareRoutine = [
    {
      step: "Cleanser",
      desc: "Removes dirt, oil, and makeup for a fresh base.",
      icon: "🫧",
    },
    {
      step: "Toner",
      desc: "Balances skin and prepares it for treatment.",
      icon: "💧",
    },
    {
      step: "Serum",
      desc: "Targets acne, glow, hydration, or dark spots.",
      icon: "✨",
    },
    {
      step: "Moisturizer",
      desc: "Locks in hydration and keeps skin soft.",
      icon: "🌸",
    },
    {
      step: "Sunscreen",
      desc: "Protects skin from UV damage every morning.",
      icon: "☀️",
    },
  ];

  const products = [
    {
      name: "Rose Hydrating Cleanser",
      price: "₹499",
      image:
        "https://imgs.search.brave.com/0CAnJLZVchCTnP79mXpu19av83NhxFHB6ArJgWf7aXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXJv/c2tpZS5jb20vY2Ru/L3Nob3AvZmlsZXMv/NF82ZmRlNDg4Ny1i/NTcxLTQxZjEtOTcx/ZS1hYmVjNzE0ZWM5/YjcucG5nP3Y9MTc0/OTgwMjc1MSZ3aWR0/aD0xOTQ2",
    },
    {
      name: "Vitamin C Glow Serum",
      price: "₹899",
      image:
        "https://imgs.search.brave.com/muvWGHGwLhXJVF1GXtvgIlA85Cof2ta44YZsfrA8duY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/ODQ3LzYwNC9zbWFs/bC9uYXR1cmFsLXZp/dGFtaW4tYy1zZXJ1/bS1za2luY2FyZS1l/c3NlbnRpYWwtb2ls/LXByb2R1Y3RzLWJv/dHRsZS1vZi12aXRh/bWluLWMtc2VydW0t/d2l0aC1mcmVzaC1q/dWljeS1vcmFuZ2Ut/ZnJ1aXQtYmVhdXR5/LXByb2R1Y3QtYnJh/bmRpbmctbW9jay11/cC1waG90by5qcGc",
    },
    {
      name: "Aloe Vera Soothing Gel",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
    },
    {
      name: "SPF 50 Sunscreen Lotion",
      price: "₹699",
      image:
        "https://www.dotandkey.com/cdn/shop/files/VitaminCSunscreenListing1-1_637b02a6-7537-475e-989f-bd472a2e415c.jpg?v=1778839085&width=700",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial",
      color: "white",
      background: "linear-gradient(135deg, #a375c4, #c2769c)",
    },
    hero: {
      textAlign: "center",
      padding: "50px 20px",
      background: "rgba(255,255,255,0.12)",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "10px",
    },
    sectionTitle: {
      marginTop: "40px",
      fontSize: "1.5rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      background: "rgba(255,255,255,0.15)",
      padding: "20px",
      borderRadius: "18px",
      backdropFilter: "blur(8px)",
      textAlign: "center",
    },
    productImage: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "12px",
    },
    button: {
      marginTop: "10px",
      padding: "10px 16px",
      border: "none",
      borderRadius: "20px",
      background: "white",
      color: "#6a0dad",
      fontWeight: "bold",
      cursor: "pointer",
    },
    icon: {
      fontSize: "2rem",
    },
  };

  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>💜 Skincare Glow Routine 💖</h1>
        <p>Simple steps for healthy, glowing skin every day</p>
      </div>

      {/* ROUTINE */}
      <h2 style={styles.sectionTitle}>🌿 Daily Skincare Routine</h2>

      <div style={styles.grid}>
        {skincareRoutine.map((item, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{item.icon}</div>
            <h3>{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <h2 style={styles.sectionTitle}>💅 Recommended Products</h2>

      <div style={styles.grid}>
        {products.map((item, i) => (
          <div key={i} style={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.productImage}
            />

            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button style={styles.button}>
              Add to Routine
            </button>
          </div>
        ))}

        {skincareProduct.map((item) => (
          <div key={item.id} style={styles.card}>
            <img
              src={item.img}
              alt={item.pname}
              style={styles.productImage}
            />

            <h3>{item.pname}</h3>
             <p>{item.des}</p>
            <p>{item.price}</p>

            <button style={styles.button}>
              Add to Routine
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          opacity: 0.8,
        }}
      >
        Made with 💜 for glowing skin ✨
      </div>
    </div>
  );
}

export default Skincare;