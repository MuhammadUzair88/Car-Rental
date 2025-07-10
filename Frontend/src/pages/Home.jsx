import React from "react";
import { ArrowDown } from "lucide-react";
import CarCards from "../components/CarCards";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-8">
      <h1 className="text-[#414141] font-semibold text-3xl sm:text-4xl text-center">
        Luxury Cars on Rent
      </h1>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Pickup Location */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Pickup Location <ArrowDown size={16} />
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Hyderabad</option>
              <option value="">Karachi</option>
              <option value="">Lahore</option>
              <option value="">Islamabad</option>
            </select>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Pick-up Date <ArrowDown size={16} />
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Return Date */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              Return Date <ArrowDown size={16} />
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src="main_car.png" className="max-h-74" alt="" />
      </div>
      <CarCards />
    </div>
  );
};

export default Home;
