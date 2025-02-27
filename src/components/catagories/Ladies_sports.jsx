import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Ladies_sports = () => {
  const shoes = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Ladies Sports Shoe ${index + 1}`,
    img: `https://via.placeholder.com/250?text=Ladies+Sports+Shoe+${index + 1}`,
  }));

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Ladies Sports Shoes Collection</h2>
      <div className="row">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow border-0">
              <a href="#" className="text-decoration-none">
                <img
                  src={shoe.img}
                  className="card-img-top img-fluid"
                  alt={shoe.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </a>
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

export default Ladies_sports;
