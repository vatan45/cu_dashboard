import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-gray-200 to-gray-100 shadow-md p-3 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between">
        
     
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-oswald text-2xl font-extrabold">CU</span>
          </div>
          <div className="flex items-baseline">
            <h1 className="text-red-600 font-oswald text-2xl font-extrabold mr-1">CHANDIGARH</h1>
            <h2 className="text-gray-700 font-oswald text-xl font-bold">UNIVERSITY</h2>
          </div>
        </div>

        


        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

    
        <div className="flex items-center space-x-4">
          <FaHome className="text-2xl text-gray-600 hover:text-yellow-500 cursor-pointer" />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
