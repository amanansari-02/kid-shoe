import "bootstrap/dist/css/bootstrap.min.css";

function Clickable_image() {
    const images = Array(30).fill("https://via.placeholder.com/150");

    return (
        <div className="container mt-4">
            <div className="row">
                {images.map((img, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-3 text-center">
                        <button className="btn btn-light p-0 border">
                            <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="img-fluid border border-dark"
                                style={{ width: "100%", height: "auto", cursor: "pointer", borderRadius: "8px", borderWidth: "3px" }}
                                onClick={() => alert(`You clicked on Image ${index + 1}`)}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clickable_image;
