export function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ff9ad5, #c084fc)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          margin: 0,
          color: "white",
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        BeautyBloom ✨
      </h2>

      {/* Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skincare"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Skincare
          </a>
        </li>

        <li>
          <a
            href="#makeup"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Makeup
          </a>
        </li>

        <li>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "white",
            color: "#c084fc",
            border: "none",
            padding: "8px 18px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Login
        </button>

        <button
          style={{
            backgroundColor: "#9333ea",
            color: "white",
            border: "none",
            padding: "8px 18px",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          🛍 Cart
        </button>
      </div>
    </nav>
  );
}