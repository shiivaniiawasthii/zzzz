import React from "react";
import Link from "next/link";

function Product({ product }) {
  return (
    <div className="my-3 p-3 rounded border border-gray-300">
      <Link href={`/product/${product._id}`}>
        <img
          className="w-full h-64 object-cover"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="mt-3">
        <Link href={`/product/${product._id}`}>
          <h2 className="text-red-500 text-lg font-semibold hover:underline">
            {product.name}
          </h2>
        </Link>
      </div>

      <div className="text-red-500 text-lg font-semibold mt-2">
        ${product.price}
      </div>
    </div>
  );
}

export default Product;
