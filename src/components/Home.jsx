import React from "react";

const Home = () => {
  return (
    <div className="container my-5 text-center">
      <h1 className="fw-bold">Welcome to Our Kids' Shoes Store</h1>
      <p className="lead">
        Discover the best collection of stylish, comfortable, and durable shoes for kids.
      </p>
      <div className="mt-4">
        <img
          src="https://via.placeholder.com/600x300?text=Kids+Shoes+Store"
          alt="Kids Shoes Store"
          className="img-fluid rounded shadow"
        />
      </div>
      <p className="mt-4">
        Explore our latest arrivals and find the perfect fit for your child today!
      </p>
      <a href="/shop" className="btn btn-primary mt-3">
        Shop Now
      </a>
    </div>
  );
};

export default Home;
