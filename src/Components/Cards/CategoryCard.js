import React from "react";
import { Link } from "react-router-dom";
import BadgePills from "../Badges/BadgePills";

export default function CategoryCard({ data = {} }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 mb-5 categorycard-container">
      <div className="card categorycard h-100">
        <div
          className="badge bg-success text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
        <img
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          className="card-img-top"
          src={
            data.courseImage ||
            "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          }
          alt={""}
        />

        <div className="card-body p-3">
          <h5 className="fw-bolder">
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/courses/${data.id}`}
            >
              <p className="course-name mb-2">{data.courseName}</p>
            </Link>
          </h5>
          <div>
            <p
              style={{
                textAlign: "start",
              }}
            >
              {data.description}
            </p>
          </div>
          <div className="divider"></div>
          <div className="py-2">
            {data.tags &&
              data.tags.map((d, i) => (
                <BadgePills
                  key={`category-card-category-tag-${i}`}
                  type="primary"
                  label={d}
                />
              ))}
          </div>
          <div className="divider"></div>
          <div className="mb-3"></div>
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <h6>Avg. Time: {data.averageCourseDuration} hrs</h6>
            </div>
            <div className="col-6">
              <button
                className="btn btn-course mt-auto"
                onClick={() => {}}
                disabled={false}
              >
                All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
