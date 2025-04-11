import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function OrderDetails() {
  const [orders, setOrders] = useState([]);

  const getShoes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/order/${localStorage.getItem("email")}`
      );
      if (response) {
        setOrders(response.data.data);
      }
    } catch (error) {
      console.error("getShoes:", error);
    }
  };

  useEffect(() => {
    getShoes();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Order Details</h2>
      <div className="row justify-content-center">
        {orders.map((order) => (
          <div key={order._id} className="col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              {/* Display Product Image */}
              {order.itemId?.image && (
                <img
                  src={order.itemId.image}
                  className="card-img-top img-fluid"
                  alt={order.itemId.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">Order ID: {order._id}</h5>
                <p className="card-text">
                  <strong>Item:</strong> {order.itemId?.name}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> {order.itemId?.price}
                </p>
                <p className="card-text">
                  <strong>Status:</strong>{" "}
                  <span className={`badge bg-success`}>{"shppted"}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
