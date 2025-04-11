import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* About Us */}
                    <div className="col-md-4 mb-3">
                        <h5 className="text-warning">About Us</h5>
                        <p>
                            Welcome to <strong>Kiddo Shoes</strong>! We provide stylish, comfortable, and durable footwear for kids of all ages. Explore our collection of trendy shoes perfect for every occasion.
                        </p>
                    </div>

                    {/* Categories & Brands */}
                    <div className="col-md-4 mb-3">
                        <h5 className="text-warning">Categories & Brands</h5>
                        <ul className="list-unstyled">
                            <li>👟 Sneakers</li>
                            <li>🥿 Sandals</li>
                            <li>👞 Formal Shoes</li>
                            <li>🥾 Boots</li>
                            <li>🎾 Sports Shoes</li>
                        </ul>
                        {/* <h6 className="text-light mt-3">Popular Brands</h6>
                        <ul className="list-unstyled">
                            <li>⭐ Nike Kids</li>
                            <li>⭐ Adidas Junior</li>
                            <li>⭐ Puma Kids</li>
                            <li>⭐ Skechers</li>
                            <li>⭐ Clarks</li>
                        </ul> */}
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 mb-3">
                        <h5 className="text-warning">Contact Us</h5>
                        <p>📍 FS Camp, Pune - 411001</p>
                        <p>📞 8669018078</p>
                        <p>
                            📸 Instagram:{" "}
                            <a href="https://www.instagram.com/shoaib_bagwan04" target="_blank" rel="noopener noreferrer" className="text-warning">
                                @shoaib_bagwan04
                            </a>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-3 border-top pt-3">
                    <p className="mb-0">© 2025 Kiddo Shoes. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
