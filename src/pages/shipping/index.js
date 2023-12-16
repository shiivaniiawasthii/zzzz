import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../../../components/AppContext";
import { useRouter } from "next/router";
const CheckoutForm = () => {
  const context = useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Order Placed Successfully..!");
    router.push("/");
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl text-red-500 font-bold mb-8 text-center">
        Checkout
      </h1>

      {!orderPlaced ? (
        <>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-red-500"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-red-500"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-red-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-red-500"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-red-500"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Place Order
            </button>
          </form>

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Order Details
            </h2>
            <ul>
              {context.cart.map((product) => (
                <li
                  key={product._id}
                  className="mb-2 flex items-center justify-between"
                >
                  <div className="w-1/6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto"
                    />
                  </div>{" "}
                  <div className="w-2/6 text-red-500">{product.name}</div>
                  <div className="w-2/6 text-red-500">{product.price}$</div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <p className="text-green-600 font-bold mb-4">
            Order Placed Successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
