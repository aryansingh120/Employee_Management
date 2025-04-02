import { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus, FiUsers } from 'react-icons/fi';

const Departments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState(null);

  // Sample department data
  const departmentsData = [
    {
      id: 1,
      name: 'Engineering',
      head: 'John Smith',
      employeeCount: 48,
      description: 'Software development and IT infrastructure management',
    },
    {
      id: 2,
      name: 'Marketing',
      head: 'Lisa Johnson',
      employeeCount: 24,
      description: 'Brand management, digital marketing and content creation',
    },
    {
      id: 3,
      name: 'Sales',
      head: 'Robert Brown',
      employeeCount: 32,
      description: 'Client acquisition and account management',
    },
    {
      id: 4,
      name: 'Human Resources',
      head: 'Sarah Williams',
      employeeCount: 12,
      description: 'Recruitment, employee relations and benefits management',
    },
    {
      id: 5,
      name: 'Finance',
      head: 'Michael Davis',
      employeeCount: 15,
      description: 'Budgeting, accounting and financial reporting',
    },
    {
      id: 6,
      name: 'Operations',
      head: 'Emily Wilson',
      employeeCount: 18,
      description: 'Supply chain, logistics and operational efficiency',
    },
  ];

  const openModal = (department = null) => {
    setCurrentDepartment(department);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentDepartment(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Departments</h1>
        <button
          onClick={() => openModal()}
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <FiPlus className="mr-2 h-4 w-4" />
          Add Department
        </button>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departmentsData.map((department) => (
          <div
            key={department.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{department.name}</h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openModal(department)}
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <FiEdit2 className="h-5 w-5" />
                  </button>
                  <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-red-500">
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">{department.description}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-900">Department Head:</span>
                <span className="ml-2">{department.head}</span>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">
                  <FiUsers className="mr-1 h-4 w-4" />
                  <span>{department.employeeCount} Employees</span>
                </div>
                <button className="ml-auto text-sm font-medium text-indigo-600 hover:text-indigo-900">
                  View Team
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Department Modal */}
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
                  {currentDepartment ? 'Edit Department' : 'Add New Department'}
                </h3>
                <div className="mt-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Department Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={currentDepartment?.name || ''}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="head" className="block text-sm font-medium text-gray-700">
                        Department Head
                      </label>
                      <input
                        type="text"
                        name="head"
                        id="head"
                        defaultValue={currentDepartment?.head || ''}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        defaultValue={currentDepartment?.description || ''}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                  {currentDepartment ? 'Update' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
