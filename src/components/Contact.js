import React from 'react';
import './Contact.css'; // Ensure to style your Contact component using this file if needed.

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>Get in touch</h2>
        <p><strong>HUMAYAN PROPERTIES LTD</strong></p>
        <p>Registered Address:</p>
        <p>1 Humayan Place, Kolkata, New Market, West Bengal, India, 700087</p>
        <p>Email: <a href="mailto:humayanprop@gmail.com">humayanprop@gmail.com</a></p>
        <p>Phone: 033 2249 1051 / 1052</p>
        <p><strong>CIN:</strong> U70101WB1928PLC005926</p>

        
        <h2>Any Grievance? Please contact us:</h2>
        <p><strong>City Office:</strong></p>
        <p>3A, Humayan Place, Kolkata, New Market, West Bengal, India, 700087</p>
        <p>Email: <a href="mailto:humayanprop@gmail.com">humayanprop@gmail.com</a></p>
        <p>Phone: 033 2249 1051 / 1052</p>

        
      </div>
    </div>
  );
};

export default Contact;
