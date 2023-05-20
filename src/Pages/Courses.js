import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../Components/Cards/ProductCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

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

  function handleAddTocart(data = {}) {
    if (data) {
      let cartCopy = [...cart];
      cartCopy.push(data);
      setCart(cartCopy);
    }
  }

  return (
    <div>
      <Header
        heading="Shop your next course"
        description="Get Flat 15% discount on all courses"
      />
      <section className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {courses &&
                  courses.length > 0 &&
                  courses.map((d, i) => (
                    <ProductCard
                      product={d}
                      key={`product-courses-${i}`}
                      handleAddToCart={handleAddTocart}
                      disabled={
                        cart.filter(
                          (cItem) => cItem.courseName === d.courseName
                        ).length > 0
                          ? true
                          : false
                      }
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
