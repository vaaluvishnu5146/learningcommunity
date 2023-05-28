import React, { useState, useContext, createContext, useEffect } from "react";

const Category = createContext({
  categories: [],
});

// HOOK
export const useCategories = () => useContext(Category);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("mocks/courses.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.courses.length > 0) {
          setCategories(data.courses);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const value = {
    categories: categories,
  };
  return <Category.Provider value={value}>{children}</Category.Provider>;
};

export default CategoryProvider;
