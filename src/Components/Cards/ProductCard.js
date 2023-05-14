import React from "react";

export default function ProductCard({
  product = {},
  handleAddToCart = (data) => {},
  disabled = () => {},
}) {
  return (
    <div className="col mb-5">
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
            <h5 className="fw-bolder">{product.courseName}</h5>
            <span className="text-muted fw-bolder text-decoration-line-through">
              ₹{product.actualPrice}
            </span>
            ₹{product.discountPrice}
          </div>
        </div>
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
      </div>
    </div>
  );
}
