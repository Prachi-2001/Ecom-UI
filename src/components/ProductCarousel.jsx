import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/data";
import { CircularPagination } from "./CircularPagination";

const productsPerPage = 20; // Number of products per page

const ProductCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calculate the index range for products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;

  // Slice the products array based on the current page
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-[6%] cursor-pointer">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            images={product.images}
            ratings={product.ratings}
          />
        ))}
        <div className="col-span-full">
          <hr className="mt-4" />
        </div>
        <div className="col-span-full w-[80%] sm:w-full text-sm flex justify-center mt-4">
          <CircularPagination
            active={currentPage}
            setActive={setCurrentPage}
            total={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
