import React, { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 💜✨");
    setForm({ name: "", email: "", message: "" });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial",
      color: "white",
      background: "linear-gradient(135deg, #a375c4, #c2769c)",
    },
    container: {
      maxWidth: "500px",
      margin: "auto",
      marginTop: "50px",
      padding: "30px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.12)",
      backdropFilter: "blur(10px)",
    },
    title: {
      textAlign: "center",
      fontSize: "2rem",
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "12px",
      border: "none",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "12px",
      border: "none",
      outline: "none",
      height: "120px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "20px",
      border: "none",
      background: "white",
      color: "#6a0dad",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px",
    },
    info: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "0.9rem",
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>💜 Contact Us 💖</h1>
        <p style={{ textAlign: "center" }}>
          We’d love to hear from you ✨
        </p>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button style={styles.button} type="submit">
            Send Message 💌
          </button>
        </form>

        <div style={styles.info}>
          💄 Glow Beauty Skincare Support<br />
          ✉️ support@glowbeauty.com
        </div>
      </div>
    </div>
  );
}