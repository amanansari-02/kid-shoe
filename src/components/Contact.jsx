import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>
      <p className="text-center lead">
        Have any questions? Reach out to us, and we'll be happy to assist you!
      </p>
      <div className="text-center">
        <p><strong>📍 Address:</strong> Near Sivarkar Garden, Wanawadi, Pune 411001</p>
        <p><strong>📞 Phone:</strong> 8087720457 | 9767438237 | 8669018078</p>
        <p><strong>📧 Email:</strong> shoaibbagwan727@gmail.com | shoaibbagwan14@gmail.com</p>
      </div>
      <div className="text-center mt-4">
        <img
          src="https://via.placeholder.com/600x300?text=Contact+Us"
          alt="Contact Us"
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  );
};

export default Contact;
