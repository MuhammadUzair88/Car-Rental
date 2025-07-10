import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ManageCars = () => {
  const { userInfo } = useAuth();

  const [Dataowner, setDataOwner] = useState([]);

  const fetchCarData = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/api/car/getadmin`,
        {
          userId: userInfo._id,
        }
      );
      setDataOwner(response.data.cars);
      console.log("hello");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, [userInfo]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-1">Manage Cars</h1>
      <p className="text-gray-500 mb-6">
        View all listed cars, update their details, or remove them from the
        booking platform.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-md">
          <thead>
            <tr className="text-left text-sm text-gray-600 bg-gray-50">
              <th className="px-4 py-3 font-medium">Car</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">dailyPrice</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row 
            You can map over actual car data here */}

            {Dataowner.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">
                  {data.brand} {data.model}
                </td>
                <td className="px-4 py-3">{data.category}</td>
                <td className="px-4 py-3">{data.dailyPrice}</td>
                <td className="px-4 py-3">{data.status}</td>

                <td className="px-4 py-3 space-x-2">
                  <button className="0 hover:underline">
                    <Eye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
