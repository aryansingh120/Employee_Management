import { useState } from 'react';
import { FiCalendar, FiClock, FiCheckCircle, FiAlertCircle, FiFilter } from 'react-icons/fi';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Sample attendance data
  const attendanceData = [
    {
      id: 1,
      name: 'Aryan',
      department: 'Engineering',
      checkIn: '09:05 AM',
      checkOut: '06:10 PM',
      status: 'Present',
      workHours: '09:05',
    },
    {
      id: 2,
      name: 'Mohit',
      department: 'Marketing',
      checkIn: '09:30 AM',
      checkOut: '06:45 PM',
      status: 'Present',
      workHours: '09:15',
    },
    {
      id: 3,
      name: 'Gargi Devi',
      department: 'Engineering',
      checkIn: '08:45 AM',
      checkOut: '05:30 PM',
      status: 'Present',
      workHours: '08:45',
    },
    {
      id: 4,
      name: 'paras',
      department: 'HR',
      checkIn: '-',
      checkOut: '-',
      status: 'Absent',
      workHours: '-',
    },
    {
      id: 5,
      name: 'Bhoomi',
      department: 'Sales',
      checkIn: '10:15 AM',
      checkOut: '06:30 PM',
      status: 'Late',
      workHours: '08:15',
    },
    {
      id: 6,
      name: 'Tunnu',
      department: 'Operations',
      checkIn: '09:00 AM',
      checkOut: '-',
      status: 'Working',
      workHours: '-',
    },
  ];

  // Get unique departments for filter dropdown
  const departments = ['All', ...new Set(attendanceData.map((emp) => emp.department))];

  // Filter attendance data based on department
  const filteredAttendance = attendanceData.filter((attendance) => {
    return selectedDepartment === 'All' || attendance.department === selectedDepartment;
  });

  // Status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return 'bg-green-100 text-green-800';
      case 'Absent':
        return 'bg-red-100 text-red-800';
      case 'Late':
        return 'bg-yellow-100 text-yellow-800';
      case 'Working':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Attendance summary
  const attendanceSummary = {
    total: filteredAttendance.length,
    present: filteredAttendance.filter((a) => a.status === 'Present').length,
    absent: filteredAttendance.filter((a) => a.status === 'Absent').length,
    late: filteredAttendance.filter((a) => a.status === 'Late').length,
    working: filteredAttendance.filter((a) => a.status === 'Working').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Attendance Tracker</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FiCalendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Generate Report
          </button>
        </div>
      </div>

      {/* Attendance Summary Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-lg bg-white p-5 shadow">
          <div className="font-medium text-gray-500">Total Employees</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">{attendanceSummary.total}</div>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <div className="font-medium text-gray-500">Present</div>
          <div className="mt-1 text-3xl font-semibold text-green-600">{attendanceSummary.present}</div>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <div className="font-medium text-gray-500">Absent</div>
          <div className="mt-1 text-3xl font-semibold text-red-600">{attendanceSummary.absent}</div>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <div className="font-medium text-gray-500">Late</div>
          <div className="mt-1 text-3xl font-semibold text-yellow-600">{attendanceSummary.late}</div>
        </div>
        <div className="rounded-lg bg-white p-5 shadow">
          <div className="font-medium text-gray-500">Currently Working</div>
          <div className="mt-1 text-3xl font-semibold text-blue-600">{attendanceSummary.working}</div>
        </div>
      </div>

      {/* Department Filter */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          <FiFilter className="mr-1 inline h-4 w-4" />
          Department:
        </span>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Attendance Table */}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Employee
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Department
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Check In
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Check Out
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Work Hours
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredAttendance.map((record) => (
              <tr key={record.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
                        {record.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">{record.name}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {record.department}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {record.checkIn !== '-' ? (
                    <div className="flex items-center">
                      <FiClock className="mr-1 h-4 w-4 text-gray-400" />
                      {record.checkIn}
                    </div>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {record.checkOut !== '-' ? (
                    <div className="flex items-center">
                      <FiClock className="mr-1 h-4 w-4 text-gray-400" />
                      {record.checkOut}
                    </div>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {record.workHours}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(record.status)}`}>
                    {record.status === 'Present' && <FiCheckCircle className="mr-1 h-3 w-3" />}
                    {record.status === 'Absent' && <FiAlertCircle className="mr-1 h-3 w-3" />}
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
