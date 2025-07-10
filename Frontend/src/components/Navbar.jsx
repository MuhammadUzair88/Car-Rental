import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userInfo, logout } = useAuth();

  const listcars = () => {
    if (!userInfo) {
      alert("plz Login First");
    }
  };

  return (
    <nav className="pl-16 md:pl-0 flex flex-wrap justify-between items-center py-4 px-5 lg:px-24 relative bg-white z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/favicon.svg" alt="logo" className="h-6 w-6" />
        <h1 className="font-semibold text-lg md:text-xl whitespace-nowrap">
          CarRental
        </h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden ml-auto">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6 font-medium">
        <ul className="flex items-center gap-6 cursor-pointer">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/cars"}>
            <li>Cars</li>
          </Link>
          <li>My Bookings</li>
          {userInfo ? (
            <Link to={"/owner"}>
              <li>dashboard</li>
            </Link>
          ) : (
            <li onClick={listcars}>List Cars</li>
          )}
        </ul>

        <div className="relative hidden xl:block">
          <input
            placeholder="Search cars"
            type="search"
            className="w-60 rounded-3xl h-10 px-10 border border-gray-200"
          />
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        {userInfo ? (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 text-white rounded-lg whitespace-nowrap"
          >
            Logout
          </button>
        ) : (
          <Link to={"/signup"}>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-lg whitespace-nowrap">
              Sign up
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="w-full lg:hidden mt-4 flex flex-col items-start gap-4 p-5 bg-white shadow-md rounded-lg">
          <ul className="flex flex-col gap-4 font-medium w-full cursor-pointer">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/cars"}>
              <li>Cars</li>
            </Link>
            <li>My Bookings</li>
            {userInfo ? (
              <Link to={"/owner"}>
                <li>dashboard</li>
              </Link>
            ) : (
              <li onClick={listcars}>List Cars</li>
            )}
          </ul>

          <div className="relative w-full">
            <input
              placeholder="Search cars"
              type="search"
              className="w-full rounded-3xl h-10 px-10 border border-gray-200"
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          {userInfo ? (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 text-white rounded-lg whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <Link to={"/signup"}>
              <button className="bg-blue-600 px-4 py-2 text-white rounded-lg whitespace-nowrap">
                Sign up
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
