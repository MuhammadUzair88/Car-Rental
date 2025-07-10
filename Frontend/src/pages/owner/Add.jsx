import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Add = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [dailyPrice, setDailyPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { userInfo } = useAuth();

  useEffect(() => {
    console.log(userInfo._id);
  });

  const handleform = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/car/addcar`,
        {
          userId: userInfo._id,
          brand: brand,
          model: model,
          year: year,
          dailyPrice: dailyPrice,
          category: category,
          transmission: transmission,
          fuelType: fuelType,
          seatingCapacity: seatingCapacity,
          location: location,
          description: description,
          CarPic: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Car Added Successfully");
    } catch (error) {
      alert("Error In Adding Car");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Add New Car</h1>
      <p className="text-gray-600 mb-6">
        Fill in details to list a new car for booking, including pricing,
        availability, and car specifications.
      </p>

      <form>
        {/* Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload a picture of your car
          </label>
          <input
            type="file"
            accept="image/*"
            className="input w-full"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-40 h-28 object-cover mt-2 rounded"
            />
          )}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-700">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g. BMW, Mercedes, Audi..."
              className="input"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Model</label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="e.g. X5, E-Class, M4..."
              className="input"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Daily Price ($)</label>
            <input
              type="number"
              value={dailyPrice}
              onChange={(e) => setDailyPrice(e.target.value)}
              className="input"
            />
          </div>
          <div>
            <label className="text-sm text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              <option value="">Select a category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Pickup">Pickup</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-700">Transmission</label>
            <select
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              className="input"
            >
              <option value="">Select a transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-700">Fuel Type</label>
            <select
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="input"
            >
              <option value="">Select a fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-700">Seating Capacity</label>
            <input
              type="number"
              value={seatingCapacity}
              onChange={(e) => setSeatingCapacity(e.target.value)}
              className="input"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="text-sm text-gray-700">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input w-full"
          >
            <option value="">Select a location</option>
            <option value="Karachi">Karachi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-sm text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
            className="input w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleform}
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700"
        >
          ✓ List Your Car
        </button>
      </form>
    </div>
  );
};

export default Add;
