import React from "react";
import { Link } from "react-router-dom";

// CHNAGE THE STYLE OF THE PRODUCT CARD TO: https://dribbble.com/shots/6649685-Course-Card-UI-Design
export default function ProductCard({
  product = {},
  handleAddToCart = (data) => {},
  disabled = () => {},
  isCartButtonVisible = false,
}) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 mb-5">
      <div className="card h-100">
        {product.isForSale && (
          <div
            className="badge bg-success text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}

        <img
          className="card-img-top"
          src={
            product.courseImage ||
            "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          }
          alt={product.productName}
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`/courses/${product.id}`}
              >
                <p className="course-name">{product.courseName}</p>
              </Link>
            </h5>
            {product.actualPrice && (
              <div>
                <p
                  style={{
                    textAlign: "start",
                  }}
                >
                  <span className="text-muted fw-bolder text-decoration-line-through">
                    ₹{product.actualPrice}
                  </span>
                  <span className="text-muted fw-bolder">
                    ₹{product.discountPrice}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
        {isCartButtonVisible && (
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => handleAddToCart(product)}
                disabled={disabled}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
