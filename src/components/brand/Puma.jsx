import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Puma = () => {
  const [items, setItems] = useState([]);

  const getShoes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items/Puma");
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
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Puma Shoes Collection</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow border-0">
              <img
                src={item.photo}
                className="card-img-top img-fluid"
                alt={item.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <Link to={`/buy/${item._id}`} className="btn btn-primary">
                  <div className="btn btn-primary">View Details</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Puma;
