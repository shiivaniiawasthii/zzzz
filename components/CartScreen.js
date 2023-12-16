import AppContext from "./AppContext";
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function CartScreen() {
  const context = useContext(AppContext);

  const router = useRouter();

  const { removeFromCart, inc, dec } = useContext(AppContext);

  const checkoutHandler = () => {
    router.push("/shipping");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-red-500 text-3xl font-bold mb-8">Shopping Cart</h1>

      {context?.cart?.length === 0 ? (
        <h4 className="mb-4">
          <Link className="text-red-500 hover:underline" href="/" passHref>
            Your cart is empty. Go back!
          </Link>
        </h4>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          <div className="md:col-span-6">
            <ul className="divide-y divide-gray-300">
              {context?.cart?.map((item) => (
                <li key={item.product} className="py-4 flex items-center">
                  <div className="md:w-1/6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/6">
                    <Link
                      className="text-red-500 mx-10 hover:underline"
                      href={`/product/${item.product}`}
                    >
                      {item.name}
                    </Link>
                  </div>

                  <div className="md:w-1/6 text-red-500">${item.price}</div>
                  <div className="md:w-1/6">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => inc(item._id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="md:w-1/6">
                    <p className="text-red-500">{item.qty}</p>
                  </div>
                  <div className="md:w-1/6">
                    <button
                      className="text-red-500 hover:text-red-700"
                      disabled={item.qty === 1}
                      onClick={() => dec(item._id)}
                    >
                      -
                    </button>
                  </div>
                  <div className="md:w-1/6">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <p>Remove</p>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded p-4">
              <h2 className="text-xl text-red-500 font-bold mb-4">
                Subtotal (
                {context.cart.reduce((acc, item) => acc + item.qty, 0)} items)
              </h2>
              <p className="text-red-500 text-xl mb-4">${context.totalPrice}</p>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
                disabled={context.cart.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
