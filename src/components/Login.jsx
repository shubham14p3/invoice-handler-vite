import React from "react";

const Login = () => {
  return (
    <div className="bg-blue-800 h-screen flex items-center ">
      <div className=" bg-white mx-auto rounded-xl ">
        <h2 className="text-2xl font-bold text-center mb-3 mt-2 ">Login</h2>
        <div className="p-8 space-y-4 ">
          <div>
            <h3 className="block text-sm text-gray-800 font-semibold mb-1">
              USER NAME
            </h3>
            <input
              type="text"
              placeholder="Enter user name"
              className="border border-gray-500 w-full px-4 py-2 rounded-xl focus:outline-none mb-2"
            />
          </div>
          <div>
            <h3 className="text-sm block text-gray-800 font-semibold mb-1">
              PASSWORD
            </h3>
            <input
              type="text"
              placeholder="Enter Password"
              className="border border-gray-500 w-full px-4 py-2 rounded-xl focus:outline-none"
            />
          </div>
          <button className="bg-orange-500 text-white font-semibold px-2 py-1.5 rounded-xl transform transition-transform duration-300 hover:bg-orange-700 cursor-pointer ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
