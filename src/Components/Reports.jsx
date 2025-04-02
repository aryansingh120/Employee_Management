import { useState } from 'react';
import { FiDownload, FiBarChart2, FiUsers, FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi';

const Reports = () => {
  const [selectedReportType, setSelectedReportType] = useState('attendance');
  const [dateRange, setDateRange] = useState('month');

  // Sample report types
  const reportTypes = [
    {
      id: 'attendance',
      name: 'Attendance Report',
      icon: FiClock,
      description: 'Employee attendance, punctuality, and leave analysis',
    },
    {
      id: 'performance',
      name: 'Performance Report',
      icon: FiBarChart2,
      description: 'Employee performance metrics and evaluation',
    },
    {
      id: 'leave',
      name: 'Leave Report',
      icon: FiCalendar,
      description: 'Leave usage analysis by department and employee',
    },
    {
      id: 'department',
      name: 'Department Report',
      icon: FiUsers,
      description: 'Department-wise employee distribution and performance',
    },
    {
      id: 'payroll',
      name: 'Payroll Report',
      icon: FiDollarSign,
      description: 'Salary, bonus, and compensation analysis',
    },
  ];

  // Get selected report
  const selectedReport = reportTypes.find((report) => report.id === selectedReportType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <FiDownload className="mr-2 h-4 w-4" />
          Export
        </button>
      </div>

      {/* Report Type Selection */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReportType(report.id)}
            className={`relative overflow-hidden rounded-lg p-4 text-left shadow focus:outline-none ${
              selectedReportType === report.id
                ? 'border-2 border-indigo-500 bg-indigo-50'
                : 'border border-gray-200 bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-md ${
                  selectedReportType === report.id ? 'bg-indigo-500' : 'bg-gray-100'
                }`}
              >
                <report.icon
                  className={`h-6 w-6 ${selectedReportType === report.id ? 'text-white' : 'text-gray-600'}`}
                />
              </div>
              <div className="ml-3">
                <h3
                  className={`text-sm font-medium ${
                    selectedReportType === report.id ? 'text-indigo-700' : 'text-gray-700'
                  }`}
                >
                  {report.name}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Report Configuration */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="mb-6 border-b border-gray-200 pb-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{selectedReport.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{selectedReport.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {selectedReportType === 'attendance' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="all">All Departments</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Report Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="summary">Summary Report</option>
                  <option value="detailed">Detailed Report</option>
                  <option value="late">Late Arrivals Report</option>
                  <option value="absent">Absent Report</option>
                </select>
              </div>
            </>
          )}

          {selectedReportType === 'leave' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="all">All Departments</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                  <option value="operations">Operations</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Leave Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option value="all">All Types</option>
                  <option value="annual">Annual Leave</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Leave</option>
                  <option value="unpaid">Unpaid Leave</option>
                </select>
              </div>
            </>
          )}

          {dateRange === 'custom' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Report Preview</h3>
        <div className="mt-6 border-4 border-dashed border-gray-200 p-8 text-center">
          <FiBarChart2 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Report Generated</h3>
          <p className="mt-1 text-sm text-gray-500">Configure the report options above and click "Generate Report" to view data here.</p>
        </div>
      </div>

      {/* Saved Reports */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Saved Reports</h3>
        <div className="mt-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Monthly Attendance Report - March 2023</h4>
                  <p className="text-sm text-gray-500">Generated on April 1, 2023</p>
                </div>
                <button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                  <FiDownload className="inline h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Q1 Performance Report - 2023</h4>
                  <p className="text-sm text-gray-500">Generated on March 31, 2023</p>
                </div>
                <button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                  <FiDownload className="inline h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Engineering Department Productivity Report</h4>
                  <p className="text-sm text-gray-500">Generated on February 15, 2023</p>
                </div>
                <button className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                  <FiDownload className="inline h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
