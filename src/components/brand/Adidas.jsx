import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const Adidas = () => {
  const shoes=[];
  const [items, setItems] = useState([]);

  const getShoes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items");
      if (response) {
        setItems(response.data.data);
      }
    } catch (error) {
      console.error("getShoes:", error);
    }
  }

  useEffect(() => {
    getShoes();
  }, []);


  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Adidas Shoes Collection</h2>
      <div className="row">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow border-0">
              <img
                src={shoe.img}
                className="card-img-top img-fluid"
                alt={shoe.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{shoe.name}</h5>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adidas;
