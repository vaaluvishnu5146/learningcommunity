import React from "react";

export default function CartCard({ data = {} }) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-3">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={
              data.courseImage ||
              "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            }
            alt=""
          />
        </div>
        <div className="col-7 p-3">
          <h5>{data.courseName}</h5>
          <p>{data.descriotion}</p>
          <div className="d-flex">
            <h5 className="text-muted fw-bolder text-decoration-line-through me-2">
              ${data.actualPrice}
            </h5>
            <h5 className="discountPrice">${data.discountPrice}</h5>
          </div>
        </div>
        <div className="col-2 p-3 d-flex align-items-end">
          <div className="cart-counter">
            <button className="btn btn-primary btn-sm">-</button>
            <p>1</p>
            <button className="btn btn-primary btn-sm">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
