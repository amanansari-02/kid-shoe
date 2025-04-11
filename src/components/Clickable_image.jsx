import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Clickable_image() {
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
    <div className="container mt-4">
      <div className="row g-3">
        {" "}
        {/* Add g-3 to set the gap between columns */}
        {items.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-sm-6 mb-3 text-center border rounded ps-4"
          >
            <Link to={`/buy/${item._id}`} className="">
              <button className="btn btn-light hover:opacity-50 p-0 mt-2">
                <img
                  src={item.photo}
                  alt={`Image`}
                  className="img-fluid border border-dark"
                  style={{
                    width: "360px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                    borderWidth: "3px",
                  }}
                  // onClick={() => alert(`You clicked on Image ${index + 1}`)}
                />
              </button>
            </Link>
            <p
              className="text-xl font-semibold text-blue-600"
              style={{ fontWeight: "bold" }}
            >
              Name: <span>{item.name}</span>
            </p>
            <p  style={{ fontWeight: "bold" }}>price: ₹{item.price}</p>
            <p  style={{ fontWeight: "bold" }}>type: {item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clickable_image;
