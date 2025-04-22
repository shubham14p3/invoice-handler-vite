import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-black h-screen">
      {/* <div className="container mx-auto "> */}
      <nav className="bg-blue-800 flex justify-end gap-4 p-4 ">
        <Link to="/Login">
          <button className="bg-orange-700 text-white px-4 py-1.5 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:bg-orange-800 cursor-pointer">
            Login
          </button>
        </Link>

        <Link to="">
          <button className="bg-amber-500 text-white px-2 py-1.5 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:bg-amber-700">
            Sign up
          </button>
        </Link>
      </nav>
      {/* </div> */}
    </div>
  );
};
export default Navbar;
