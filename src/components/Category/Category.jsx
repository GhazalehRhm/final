import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Category = ({ onProduct }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    let flag = true;
    getCategory(flag);

    return () => {
      console.log("cleanup");
      flag = false;
    };
  }, []);

  const getCategory = (flag) => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        if (flag) setCategory(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const handleCategory = (item) => {
      fetch(`https://fakestoreapi.com/products/category/${item}`)
        .then((res) => res.json())
        .then((data) => {
          onProduct(data);
        })
        .catch(() => {
          console.log("error");
      
    });
  };
  return (
    <div className="flex gap-2 pt-10 justify-center">
      {category.map((item) => (
        <div key={item}>
          <button
            onClick={()=>handleCategory(item)}
            className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden  bg-[rgb(15, 19, 28)] font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 rounded-md before:border-[rgb(15, 19, 28)] before:duration-100 before:ease-linear hover:bg-blue-600"
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
