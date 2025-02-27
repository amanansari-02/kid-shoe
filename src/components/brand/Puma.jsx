import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Puma = () => {
  const shoes = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Puma Shoe ${index + 1}`,
    img: `https://via.placeholder.com/250?text=Puma+${index + 1}`,
  }));

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Puma Shoes Collection</h2>
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

export default Puma;
