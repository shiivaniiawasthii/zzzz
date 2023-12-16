import React from "react";
import products from "../products.json";
import Product from "./Product";

function HomeScreen() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {products.products.map((el) => (
          <div key={el._id} className="p-4">
            <Product product={el} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
