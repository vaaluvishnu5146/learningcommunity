import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../Components/Cards/ProductCard";
import CategoryCard from "../Components/Cards/CategoryCard";

export default function Courses({ cart, handleAddTocart }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("mocks/courses.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.courses.length > 0) {
          setCourses(data.courses);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header
        heading="Shop your next course"
        description="Get Flat 15% discount on all courses"
      />
      <section className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {courses &&
                  courses.length > 0 &&
                  courses.map((d, i) => (
                    <CategoryCard data={d} key={`categories-${i}`} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
