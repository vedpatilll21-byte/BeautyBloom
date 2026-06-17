export function About() {
  return (
    <section
      style={{
        padding: "80px 60px",
        background: "linear-gradient(135deg, #fff0f6, #f3e8ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "50px",
      }}
    >
      {/* Left Image */}
      <div style={{ flex: "1", minWidth: "280px", textAlign: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"
          alt="Beauty Brand"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Right Content */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <h2
          style={{
            fontSize: "40px",
            color: "#9333ea",
            marginBottom: "20px",
          }}
        >
          About BeautyBloom ✨
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          At BeautyBloom, we believe beauty is not about changing who you are —
          it's about enhancing your natural glow. Our products are carefully
          designed with premium ingredients to help you feel confident and
          radiant every day.
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "30px",
          }}
        >
          From skincare to makeup essentials, we bring you cruelty-free,
          high-quality beauty products that celebrate self-love, confidence,
          and elegance.
        </p>

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
          Explore Products
        </button>
      </div>
    </section>
  );
}