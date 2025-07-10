import {
  Car,
  Fuel,
  Locate,
  LocateFixed,
  LocateIcon,
  LocationEditIcon,
  User,
} from "lucide-react";
import React from "react";

const CarCards = () => {
  return (
    <div className="bg-white w-[317px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
      {/* Image */}
      <img
        src="/image (13).png"
        alt="Car"
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="flex flex-col px-5 py-4">
        <h1 className="text-xl font-semibold text-gray-800">BMW X5</h1>
        <p className="text-sm text-gray-500 mb-4">SUV · 2022</p>

        {/* Car Features */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>5 Seats</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel size={18} />
              <span>Gasoline</span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Car size={18} />
              <span>Automatic</span>
            </div>
            <div className="flex items-center gap-2">
              <LocationEditIcon size={18} />
              <span>Los Angeles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
