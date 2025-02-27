import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">About Us</h2>
      <p className="text-center lead">
        Welcome to our Kids' Shoes Store! We offer a wide variety of stylish, comfortable, 
        and durable shoes for kids of all ages. Our mission is to provide high-quality footwear 
        that keeps little feet happy and healthy.
      </p>
      <div className="text-center mt-4">
        <img
          src="https://via.placeholder.com/600x300?text=Kids+Shoes"
          alt="Kids Shoes"
          className="img-fluid rounded shadow"
        />
      </div>
      <p className="mt-4 text-center">
        Whether it's for school, sports, or casual wear, we have the perfect pair for your child.
        Explore our collection today and give their feet the comfort they deserve!
      </p>
    </div>
  );
};

export default About;
