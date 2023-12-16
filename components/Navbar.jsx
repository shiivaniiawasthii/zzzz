// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <img
              className="w-20 h-15 mr-2"
              src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
            />
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link className="text-red-600" href="/">
            Home
          </Link>

          <Link href="/cart" className="text-red-600">
            Cart
          </Link>

          <Link href="/checkout" className="text-red-600">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
