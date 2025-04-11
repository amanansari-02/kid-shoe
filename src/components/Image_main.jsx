import axios from "axios";
import React, { useEffect, useState } from "react";

function Image_main() {
  const [items, setItems] = useState([]);

  const getShoes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items/All");
      if (response) {
        setItems(response.data.data);
      }
    } catch (error) {
      console.error("getShoes:", error);
    }
  };

  useEffect(() => {
    getShoes();
  }, []);
  return (
    <>
      {items.map((item) => {
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={item?.photo}
            alt="Main Image"
            width="1200"
            height="650"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              objectFit: "cover",
            }}
          />
        </div>;
      })}
    </>
  );
}

export default Image_main;
