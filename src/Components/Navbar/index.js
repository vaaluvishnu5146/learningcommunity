import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

export default function Navbar({ brand = "" }) {
  const { cart = [] } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link to="/courses" className="navbar-brand">
          {brand}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"courses"}
                className="nav-link active"
                aria-current="page"
              >
                Courses
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to={"cart"} className="btn btn-outline-dark">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart.length}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

// <li className="nav-item dropdown">
//   <a
//     className="nav-link dropdown-toggle"
//     id="navbarDropdown"
//     href="#!"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Shop
//   </a>
//   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//     <li>
//       <a className="dropdown-item" href="#!">
//         All Products
//       </a>
//     </li>
//     <li>
//       <hr className="dropdown-divider" />
//     </li>
//     <li>
//       <a className="dropdown-item" href="#!">
//         Popular Items
//       </a>
//     </li>
//     <li>
//       <a className="dropdown-item" href="#!">
//         New Arrivals
//       </a>
//     </li>
//   </ul>
// </li>;
