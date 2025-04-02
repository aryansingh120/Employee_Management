import { FiUsers, FiLayers, FiClock, FiAlertCircle } from 'react-icons/fi';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Employees',
      value: '145',
      icon: FiUsers,
      color: 'bg-blue-500',
    },
    {
      name: 'Departments',
      value: '12',
      icon: FiLayers,
      color: 'bg-green-500',
    },
    {
      name: 'Attendance Rate',
      value: '94%',
      icon: FiClock,
      color: 'bg-purple-500',
    },
    {
      name: 'Pending Requests',
      value: '8',
      icon: FiAlertCircle,
      color: 'bg-yellow-500',
    },
  ];

  const recentActivities = [
    { id: 1, action: 'John Doe submitted leave request', time: '2 hours ago' },
    { id: 2, action: 'Sarah joined Engineering department', time: '5 hours ago' },
    { id: 3, action: 'New employee Mike Johnson added', time: '1 day ago' },
    { id: 4, action: 'Performance review scheduled for Dev Team', time: '2 days ago' },
    { id: 5, action: 'Payroll processed for March', time: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <select className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
          <button className="rounded-md bg-indigo-600 px-4 py-1 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`rounded-md ${stat.color} p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Department Distribution */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Department Distribution</h3>
          </div>
          <div className="border-t border-gray-200 p-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Engineering</div>
                  <div className="text-sm font-medium text-gray-900">48</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-blue-500" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Sales</div>
                  <div className="text-sm font-medium text-gray-900">32</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Marketing</div>
                  <div className="text-sm font-medium text-gray-900">24</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-yellow-500" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">HR</div>
                  <div className="text-sm font-medium text-gray-900">12</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-purple-500" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900">Operations</div>
                  <div className="text-sm font-medium text-gray-900">18</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-red-500" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
