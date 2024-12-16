import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";



const Header = () => {
  const token = useSelector((s) => s.token.value);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="w-full border-b bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-gray-900">WIX</span>
        <span className="text-gray-500">Blog</span>
      </div>
      {/* Navigation Links */}
      <div className="flex gap-8 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-purple-500 ${
              isActive ? "text-purple-700 underline" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `text-lg font-medium hover:text-purple-500 ${
              isActive ? "text-purple-700 underline" : "text-gray-700"
            }`
          }
        >
          Register
        </NavLink>
        {token ? (
          <>
            <NavLink
              to="/admin/create-product"
              className={({ isActive }) =>
                `text-lg font-medium hover:text-purple-500 ${
                  isActive ? "text-purple-700 underline" : "text-gray-700"
                }`
              }
            >
              Admin
            </NavLink>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCategoryMenu}
                className="text-lg font-medium hover:text-purple-500 text-gray-700 cursor-pointer"
              >
                Category <span className="ml-1">▼</span>
              </button>

              {isCategoryOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-48">
                  <NavLink to="/create-category">
                    <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                      Add New Category
                    </span>
                  </NavLink>
                  <NavLink to="/see-category">
                    <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                      List of Categories
                    </span>
                  </NavLink>
                  <NavLink to="/see-one-category">
                    <span className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                      Category Lookup
                    </span>
                  </NavLink>
                </div>
              )}
            </div>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `text-lg font-medium hover:text-purple-500 ${
                isActive ? "text-purple-700 underline" : "text-gray-700"
              }`
            }
          >
            Login
          </NavLink>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border   rounded-full  px-2 py-1"
        />
        <Link to="/login">
          <button className="border font-medium  py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white transition duration-200">
            Sign in
          </button>
        </Link>
        <Link to="/register">
          <button className="border font-medium  py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white transition duration-200">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
