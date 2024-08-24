import React from "react";

const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.03] transition-all duration-500 cursor-pointer">
      <a href="#">
        <img className="rounded-t-lg" src={product.images[0] || ""} alt="Img" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
