import React from "react";
import products from "../products.json";
import AppContext from "./AppContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import Navbar from "./Navbar";

function ProductScreen() {
  const router = useRouter();
  const { addToCart } = useContext(AppContext);

  const id = router.query.org;
  const productId = id && typeof id === "string" ? id : "";
  const product = products.products.find((p) => p._id === productId);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <div className="text-2xl font-bold">Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="my-8 mx-10">
        <Link
          href="/"
          className="bg-red-500 text-white px-4 py-2 rounded inline-block my-3"
        >
          Go Back Home
        </Link>
        <div className="text-red-500 text-3xl font-bold my-4">
          {product.name}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
          <div>
            <div className="text-red-500 mb-4 text-xl font-semibold">
              Price: ${product.price}
            </div>
            <div className="mb-4 text-red-500 text-2xl">
              Description: {product.description}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-red-500 text-white px-10 py-8 rounded"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductScreen;
