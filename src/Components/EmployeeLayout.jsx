// EmployeeLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

const sidebarLinks = [
  { name: "Dashboard", path: "/employee" },
  { name: "Profile", path: "/employee/profile" },
  { name: "Attendance", path: "/employee/attendance" },
  { name: "Tasks", path: "/employee/tasks" },
  { name: "Leave Requests", path: "/employee/leaves" },
  { name: "Performance", path: "/employee/performance" },
  { name: "Settings", path: "/employee/settings" },
];

export default function EmployeeLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Employee Panel</h2>
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
