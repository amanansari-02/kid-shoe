import React from "react";

function Image_main() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img 
        src="/image_main.jpg" 
        alt="Main Image" 
        width="1200" 
        height="650" 
        style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", objectFit: "cover" }} 
      />
    </div>
  );
}

export default Image_main;
