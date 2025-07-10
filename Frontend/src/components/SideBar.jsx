import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Gauge, PlusCircle, CalendarCheck2, Car } from "lucide-react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Dashboard", icon: <Gauge size={18} />, href: "/owner" },
    { name: "Add Car", icon: <PlusCircle size={18} />, href: "/owner/add" },
    {
      name: "Manage Bookings",
      icon: <CalendarCheck2 size={18} />,
      href: "/owner/bookings",
    },
    { name: "Manage Cars", icon: <Car size={18} />, href: "/owner/cars" },
  ];

  const user = {
    email: "owner@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r shadow transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col items-center px-4 py-6 space-y-4">
          <div className="w-24 h-24 mt-13 overflow-hidden rounded-full border-4 border-blue-500">
            <img
              src={user.avatar}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-gray-700 font-semibold text-sm text-center">
            {user.email}
          </p>

          <nav className="w-full mt-4">
            <ul className="space-y-1">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-blue-100
                    ${
                      location.pathname === link.href
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700"
                    }`}
                    onClick={() => setOpen(false)} // close on mobile click
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
