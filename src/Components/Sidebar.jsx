import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiLayers,
  FiSettings,
  FiClock,
  FiCalendar,
  FiBarChart2,
  FiX
} from 'react-icons/fi';

const Sidebar = ({ closeSidebar }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: FiHome, href: '/dashboard' },
    { name: 'Employees', icon: FiUsers, href: '/employees' },
    { name: 'Departments', icon: FiLayers, href: '/departments' },
    { name: 'Attendance', icon: FiClock, href: '/attendance' },
    { name: 'Leave Management', icon: FiCalendar, href: '/leave' },
    { name: 'Reports', icon: FiBarChart2, href: '/reports' },
    { name: 'Settings', icon: FiSettings, href: '/settings' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <span className="text-xl font-bold text-indigo-600">EMS</span>
          <span className="ml-2 text-lg font-medium">Portal</span>
        </div>
        <button
          onClick={closeSidebar}
          className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
        >
          <FiX className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
              isActive(item.href)
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            onClick={() => window.innerWidth < 1024 && closeSidebar()}
          >
            <item.icon
              className={`mr-3 h-5 w-5 ${
                isActive(item.href) ? 'text-indigo-500' : 'text-gray-400'
              }`}
            />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-200">
            <div className="flex h-full items-center justify-center font-bold text-indigo-600">
              A
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">admin@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
