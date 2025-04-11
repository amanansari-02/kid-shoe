import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { motion } from "framer-motion";
import axios from "axios";

const BuyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shoe, setShoe] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/item/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data) {
          setShoe(data.data);
        } else {
          console.error("No data found for this shoe.");
        }
      })
      .catch((error) => console.error("Error fetching shoe data:", error));
  }, [id]);

  const handleBuyNow = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/order", {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        itemId: id,
      });
      if (response) {
        setShowPopup(true);
        toast.success("🎉 Purchase successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          setShowPopup(false);
          navigate("/home");
        }, 3000);
      }
      // if (response) {
      //   setItems(response.data.data);
      // }
    } catch (error) {
      console.error("getShoes:", error);
    }
  };

  // const handleBuyNow = () => {
  //   setShowPopup(true);
  //   toast.success("🎉 Purchase successful!", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //   });

  //   setTimeout(() => {
  //     setShowPopup(false);
  //     navigate("/home");
  //   }, 3000);
  // };

  if (!shoe) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">Loading...</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ display: "flex" }}
      className="flex flex-col md:flex-row items-center md:items-start"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-3"
      >
        <img
          src={shoe.photo}
          alt={shoe.name}
          className="border rounded shadow-lg"
          style={{ height: "400px", width: "400px" }}
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="ms-5"
      >
        <h2 className="text-2xl font-bold mt-4">{shoe.name}</h2>
        <p className="text-gray-700 mt-2">Category: {shoe.category}</p>
        <p className="text-gray-700 mt-2">Type: {shoe.type}</p>
        <p className="text-gray-700 mt-2 me-5">
          Step into style at our premium shoe store, where fashion meets
          comfort! We offer a wide range of footwear, from trendy sneakers and
          elegant heels to durable boots and casual loafers. Whether you're
          looking for everyday wear or something special, our collection ensures
          quality, affordability, and the latest designs. With top brands and
          expert recommendations, finding the perfect fit has never been easier.
          Visit us today and step up your style!
        </p>

        <p className="text-xl font-semibold text-blue-600 mt-2">
          ₹{shoe.price}
        </p>

        <motion.button
          onClick={handleBuyNow}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "black" }}
          className="mt-4 bg-blue-500 text-dark px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Buy Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BuyPage;
