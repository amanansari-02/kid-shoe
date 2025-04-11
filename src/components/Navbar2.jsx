import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between w-100">
        {/* Categories Dropdown (Left Side) */}
        <div className="dropdown col-4 col-lg-auto">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="categoriesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
            {/* <li>
              <Link to="/Boys_sports" className="dropdown-item">
                All
              </Link>
            </li> */}
            <li>
              <Link to="/Boys_sports" className="dropdown-item">
                Girls
              </Link>
            </li>
            <li>
              <Link to="/Boys_formals" className="dropdown-item">
                Boys
              </Link>
            </li>
            {/* <li>
              <Link to="/Boys_chapels" className="dropdown-item">
                Boys's Chapals
              </Link>
            </li>
            <li>
              <Link to="/Ladies_sandals" className="dropdown-item">
                Ladies Sandals
              </Link>
            </li>
            <li>
              <Link to="/Ladies_sports" className="dropdown-item">
                Ladies Shoes
              </Link>
            </li>
            <li>
              <Link to="/Ladies_chapels" className="dropdown-item">
                Ladies Chapal
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Search Bar (Center) */}
        {/* <form className="d-flex col-4 col-lg-auto">
          <input className="form-control me-2" type="search" placeholder="Search for products..." aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className="w-75">
          <marquee className="text-danger">
            Step into comfort and style - The best shoes for kids
          </marquee>
        </div>

        {/* Brands Dropdown (Right Side) */}
        <div className="dropdown col-4 col-lg-auto">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="brandsDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Brands
          </button>
          <ul className="dropdown-menu" aria-labelledby="brandsDropdown">
            <li>
              <Link to="/Nike" className="dropdown-item">
                Nike
              </Link>
            </li>
            <li>
              <Link to="/Adidas" className="dropdown-item">
                Adidas
              </Link>
            </li>
            <li>
              <Link to="/Puma" className="dropdown-item">
                Puma
              </Link>
            </li>
            {/* <li>
              <Link to="/Reebok" className="dropdown-item">
                Reebok
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
