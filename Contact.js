import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "500px",
  transform:"translate(0%, 25%)",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center" ,
    
  };

  const formGroupStyle = {
    marginBottom: "15px",
    textAlign: "left"
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "none"
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
