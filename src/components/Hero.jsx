export function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px",
        background: "linear-gradient(135deg, #fff0f6, #f3e8ff)",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      {/* LEFT SIDE CONTENT */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            color: "#9333ea",
            marginBottom: "20px",
          }}
        >
          Glow Naturally,
          <br />
          Shine Beautifully ✨
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.6",
            marginBottom: "30px",
            maxWidth: "450px",
          }}
        >
          Discover premium skincare, makeup, and beauty essentials that
          enhance your natural glow. Feel confident, radiant, and beautiful
          every day.
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button
            style={{
              background: "#ec4899",
              color: "white",
              border: "none",
              padding: "14px 28px",
              borderRadius: "30px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Shop Now
          </button>

          <button
            style={{
              background: "white",
              color: "#9333ea",
              border: "2px solid #9333ea",
              padding: "14px 28px",
              borderRadius: "30px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div style={{ flex: "1", minWidth: "280px", textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
          alt="Beauty Products"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
          }}
        />
      </div>
    </section>
  );
}