import React from "react";

export function Makeup() {
  const makeupProducts = [
    {
      name: "Velvet Matte Lipstick",
      desc: "Long-lasting bold color with a smooth finish.",
      price: "₹799",
      image:
        "https://imgs.search.brave.com/iizkNpxTMfvqsxVCgSXlFAYn7zSfVoAjqO2SueD1BIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWNhZmZlaW5lLmNv/bS9jZG4vc2hvcC9m/aWxlcy9jYXJkXzhf/YzFhODA5M2YtZDQ0/Zi00MmI0LWEyZWYt/MGE4YjliMGNmNTRj/LmpwZz92PTE3MjA3/OTYzODgmd2lkdGg9/MTk0Ng",
    },
    {
      name: "Glow Foundation",
      desc: "Lightweight coverage for a flawless glow.",
      price: "₹1,299",
      image:
        "https://imgs.search.brave.com/gcu8ZiMqPATCFaozgYHxxFADyXd3gWCMmDLv8gHJwEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLmFs/aWNkbi5jb20vQHNj/MDQva2YvSDY3OTRl/ZWRiZTdjZDQ4NjE5/YWYwYWFmNDRiOTZm/YWM1QS5qcGc",
    },
    {
      name: "Rose Blush Palette",
      desc: "Soft pink tones for a natural blush look.",
      price: "₹999",
      image:
        "https://imgs.search.brave.com/lKwibYlYSVYRMYcYYtZ5qLeM6upDt2CmWV6SQP7pEps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hbGx1cmUuY29t/L3Bob3Rvcy82Nzg5/NjNkOGU5OTNhNjAw/ZDk1OGQ0OTAvMzo0/L3dfNzQ4LGNfbGlt/aXQvT25lJTIwU2l6/ZSUyMGJ5JTIwUGF0/cmljayUyMFN0YXJy/JTIwQ2hlZWslMjBD/bGFwcGVyJTIwM0Ql/MjBCbHVzaCUyMFRy/aW8lMjBQYWxldHRl/LnBuZw",
    },
    {
      name: "Volume Mascara",
      desc: "Adds dramatic volume and length to lashes.",
      price: "₹699",
      image:
        "https://imgs.search.brave.com/6qqBaCJFLsNnVdt-DJPu93BMrokI97u8y0PHWiHhxWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnlyZGllLmNvbS90/aG1iL00wY3ZXYjVr/TXdubmNadUpJNTBl/Mi1MQ2M5az0vZml0/LWluLzE1MDB4MTAw/MC9maWx0ZXJzOm5v/X3Vwc2NhbGUoKTpt/YXhfYnl0ZXMoMTUw/MDAwKTpzdHJpcF9p/Y2MoKTpmb3JtYXQo/d2VicCkveXNsLWxh/c2gtY2xhc2gtZXh0/cmVtZS12b2x1bWUt/bWFzY2FyYS1pbi11/bmluaGliaXRlZC1i/cm93bi1kN2MxMTdm/N2QyODI0OTMzOGFl/YWUxYWUxMDQ1OGY5/MC5qcGc",
    },
    {
      name: "Shimmer Highlighter",
      desc: "Gives your skin a radiant glowing finish.",
      price: "₹899",
      image:
        "https://imgs.search.brave.com/h8vJXe2q2NzHB6DpC8lbYep-UMWMhFd09sF58ToyP8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvaGlnaGxpZ2h0/ZXIvMS9uL2UvMjAt/Ni1jb2xvci1zaGlt/bWVyLWhpZ2hsaWdo/dGVyLXBhbGV0dGUt/d2l0aC1tYWtldXAt/YnJ1c2gtZmFjZS1v/cmlnaW5hbC1pbWFo/amM1d3hxdWpndWg2/LmpwZWc_cT03MA",
    },
    {
      name: "Eyebrow Definer",
      desc: "Perfect brows in seconds with natural finish.",
      price: "₹499",
      image:
        "https://imgs.search.brave.com/6G4M114jBwYR_-vRHewxOf4O-rSUFQZuaVfshPzn7JQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFjY29zbWV0aWNz/LmNvbS9jZG4vc2hv/cC9maWxlcy84OTA0/MzQxMjAzOTU4X0lN/Ry5vdGhlcjEuanBn/P3Y9MTcxODAxNTgy/MSZ3aWR0aD0xNTAw",
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
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "30px",
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
    price: {
      fontWeight: "bold",
      marginTop: "10px",
      display: "block",
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
    sectionTitle: {
      marginTop: "40px",
      fontSize: "1.5rem",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <h1 style={styles.title}>💄 Beauty Makeup Collection 💜</h1>
        <p>
          Enhance your natural beauty with premium makeup essentials ✨
        </p>
      </div>

      <h2 style={styles.sectionTitle}>🌸 Makeup Essentials</h2>

      <div style={styles.grid}>
        {makeupProducts.map((item, i) => (
          <div key={i} style={styles.card}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.productImage}
            />

            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span style={styles.price}>{item.price}</span>

            <button style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          opacity: 0.8,
        }}
      >
        Made with 💜💄 for beauty lovers ✨
      </div>
    </div>
  );
}

export default Makeup;