import { useState } from 'react';
import { FiCalendar, FiFilter, FiPlus, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Leave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');

  // Sample leave data
  const leaveData = [
    {
      id: 1,
      employee: 'Aryan',
      department: 'Engineering',
      type: 'Sick Leave',
      startDate: '2023-04-05',
      endDate: '2023-04-07',
      days: 3,
      reason: 'Not feeling well, need to see a doctor',
      status: 'Approved',
    },
    {
      id: 2,
      employee: 'Mohit',
      department: 'Marketing',
      type: 'Annual Leave',
      startDate: '2023-05-10',
      endDate: '2023-05-17',
      days: 8,
      reason: 'Family vacation',
      status: 'Approved',
    },
    {
      id: 3,
      employee: 'Paras',
      department: 'Engineering',
      type: 'Personal Leave',
      startDate: '2023-05-22',
      endDate: '2023-05-22',
      days: 1,
      reason: 'Personal matter to attend',
      status: 'Pending',
    },
    {
      id: 4,
      employee: 'Gargi Devi',
      department: 'HR',
      type: 'Annual Leave',
      startDate: '2023-06-15',
      endDate: '2023-06-20',
      days: 6,
      reason: 'Summer vacation',
      status: 'Pending',
    },
    {
      id: 5,
      employee: 'Bhoomi',
      department: 'Sales',
      type: 'Sick Leave',
      startDate: '2023-04-18',
      endDate: '2023-04-19',
      days: 2,
      reason: 'Fever and headache',
      status: 'Rejected',
    },
    {
      id: 6,
      employee: 'Tunnu',
      department: 'Operations',
      type: 'Casual Leave',
      startDate: '2023-05-05',
      endDate: '2023-05-05',
      days: 1,
      reason: 'Family function',
      status: 'Approved',
    },
  ];

  // Leave types
  const leaveTypes = [
    { id: 'annual', name: 'Annual Leave', limit: 20, color: 'bg-blue-500' },
    { id: 'sick', name: 'Sick Leave', limit: 10, color: 'bg-red-500' },
    { id: 'personal', name: 'Personal Leave', limit: 5, color: 'bg-yellow-500' },
    { id: 'casual', name: 'Casual Leave', limit: 7, color: 'bg-green-500' },
    { id: 'unpaid', name: 'Unpaid Leave', limit: 30, color: 'bg-gray-500' },
  ];

  // Filter leave data based on status
  const filteredLeave = leaveData.filter((leave) => {
    return filterStatus === 'All' || leave.status === filterStatus;
  });

  // Status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Leave Management</h1>
        <button
          onClick={openModal}
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <FiPlus className="mr-2 h-4 w-4" />
          Apply for Leave
        </button>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {leaveTypes.map((type) => (
          <div key={type.id} className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`h-8 w-2 rounded-full ${type.color}`}></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">{type.name}</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">15/{type.limit}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">
          <FiFilter className="mr-1 inline h-4 w-4" />
          Status:
        </span>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Leave Applications Table */}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Employee
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Leave Type
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Date
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Days
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Reason
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {filteredLeave.map((leave) => (
              <tr key={leave.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="font-medium text-gray-900">{leave.employee}</div>
                  <div className="text-xs text-gray-500">{leave.department}</div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {leave.type}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1 h-4 w-4 text-gray-400" />
                    <span>
                      {leave.startDate === leave.endDate
                        ? leave.startDate
                        : `${leave.startDate} - ${leave.endDate}`}
                    </span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {leave.days}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {leave.reason}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(leave.status)}`}>
                    {leave.status}
                  </span>
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  {leave.status === 'Pending' && (
                    <div className="flex items-center space-x-2">
                      <button className="text-green-600 hover:text-green-900">
                        <FiCheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FiXCircle className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Leave Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={closeModal}
            ></div>

            <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Apply for Leave
                </h3>
                <div className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
                        Leave Type
                      </label>
                      <select
                        id="leaveType"
                        name="leaveType"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      >
                        {leaveTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          id="startDate"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                          End Date
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          id="endDate"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                        Reason
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Please provide a reason for your leave request"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leave;
