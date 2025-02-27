import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Buy_page = () => {
    const { id } = useParams();
    const [shoe, setShoe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/item/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    setShoe(data);
                } else {
                    console.error("No data found for this shoe.");
                }
            })
            .catch((error) => console.error("Error fetching shoe data:", error));
    }, [id]);
    

    if (!shoe) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-5 border rounded-lg shadow-lg mt-10">
            <h1 className="text-2xl font-bold mb-4">{shoe.name}</h1>
            <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg mb-2"><strong>Price:</strong> ${shoe.price}</p>
            <p className="text-lg mb-4"><strong>Type:</strong> {shoe.type}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Buy Now
            </button>
        </div>
    );
};

export default Buy_page;
