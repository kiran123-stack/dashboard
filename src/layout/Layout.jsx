import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Layout = ({ children }) => {
  const { userRole, setUserRole } = useAppContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-w-full w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-xl p-5 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
      >
        <h1 className="text-2xl font-bold mb-8">FinTrack</h1>

        <ul className="space-y-4">
          <li className="hover:bg-white/20 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-white/20 p-2 rounded cursor-pointer">Transactions</li>
          <li className="hover:bg-white/20 p-2 rounded cursor-pointer">Reports</li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1">
        
        {/*  Topbar */}
        <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
          
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <h2 className="font-semibold text-gray-700">Dashboard</h2>

          {/* Role Switch */}
          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className=" bg-green-400 text-white px-2 py-1 rounded text-sm"
          >
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;