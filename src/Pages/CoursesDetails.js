import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../Components/Cards/ProductCard";
import data from "../Assets/coursesDetails.json";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function CoursesDetails(props) {
  const [courses, setCourses] = useState([]);
  const { categoryId = null } = useParams();

  const { cart = [], handleAddTocart = (d) => {} } = useCart();

  useEffect(() => {
    if (data && data.courses.length > 0 && categoryId) {
      setCourses(
        data.courses.filter((d) => d.categoryId === Number(categoryId))
      );
    }
  }, [categoryId]);

  useEffect(() => {
    console.log("Course Details Page Rendered");
    return () => {};
  }, []);

  useLayoutEffect(() => {
    console.log("Cart changed");
    return () => {};
  }, [cart]);

  return (
    <>
      <Header
        heading="Shop your next course"
        description="Get Flat 15% discount on all courses"
      />
      <section className="py-5">
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
                    cart.filter((cItem) => cItem.courseName === d.courseName)
                      .length > 0
                      ? true
                      : false
                  }
                  isCartButtonVisible={true}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
