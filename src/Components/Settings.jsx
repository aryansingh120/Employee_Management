import { useState } from 'react';
import { FiSave, FiUser, FiUsers, FiBell, FiLock, FiDatabase, FiFileText } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('company');

  // Tabs for the settings page
  const tabs = [
    { id: 'company', name: 'Company Profile', icon: FiUser },
    { id: 'departments', name: 'Department Settings', icon: FiUsers },
    { id: 'notifications', name: 'Notification Settings', icon: FiBell },
    { id: 'security', name: 'Security', icon: FiLock },
    { id: 'backup', name: 'Data Backup', icon: FiDatabase },
    { id: 'policies', name: 'Policies', icon: FiFileText },
  ];

  // Company information
  const [companyInfo, setCompanyInfo] = useState({
    name: 'Acme Corp',
    email: 'info@acmecorp.com',
    phone: '+1 (123) 456-7890',
    address: '123 Business Park, Suite 500, San Francisco, CA 94103',
    website: 'www.acmecorp.com',
    fiscalYear: 'January - December',
    workWeek: 'Monday - Friday',
    workHours: '9:00 AM - 6:00 PM',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <FiSave className="mr-2 h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col rounded-lg bg-white shadow lg:flex-row">
        {/* Sidebar */}
        <div className="w-full border-b border-gray-200 p-4 lg:w-64 lg:border-b-0 lg:border-r">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <tab.icon
                  className={`mr-3 h-5 w-5 ${
                    activeTab === tab.id ? 'text-indigo-500' : 'text-gray-400'
                  }`}
                />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Company Profile */}
          {activeTab === 'company' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Company Profile</h2>
              <p className="mt-1 text-sm text-gray-500">
                Update your company's information and settings.
              </p>

              <form className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={companyInfo.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={companyInfo.email}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={companyInfo.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="website"
                        id="website"
                        value={companyInfo.website}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="address"
                        id="address"
                        rows={3}
                        value={companyInfo.address}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="fiscalYear" className="block text-sm font-medium text-gray-700">
                      Fiscal Year
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="fiscalYear"
                        id="fiscalYear"
                        value={companyInfo.fiscalYear}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="workWeek" className="block text-sm font-medium text-gray-700">
                      Work Week
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="workWeek"
                        id="workWeek"
                        value={companyInfo.workWeek}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="workHours" className="block text-sm font-medium text-gray-700">
                      Work Hours
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="workHours"
                        id="workHours"
                        value={companyInfo.workHours}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Department Settings */}
          {activeTab === 'departments' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Department Settings</h2>
              <p className="mt-1 text-sm text-gray-500">
                Configure department-specific settings like managers, hierarchy, and policies.
              </p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="italic text-gray-500">Department settings will be shown here.</p>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
              <p className="mt-1 text-sm text-gray-500">
                Configure when and how you want to be notified about system activities.
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                <div className="mt-2 space-y-4">
                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="email-leave"
                        name="email-leave"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-leave" className="font-medium text-gray-700">
                        Leave Requests
                      </label>
                      <p className="text-gray-500">Get notified when employees request time off.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="email-attendance"
                        name="email-attendance"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-attendance" className="font-medium text-gray-700">
                        Attendance Issues
                      </label>
                      <p className="text-gray-500">Receive alerts for late arrivals or absences.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="email-reports"
                        name="email-reports"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email-reports" className="font-medium text-gray-700">
                        Scheduled Reports
                      </label>
                      <p className="text-gray-500">Get regular reports directly in your inbox.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage password policies, two-factor authentication, and access controls.
              </p>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Password Policy</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Set requirements for password strength and expiration.</p>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="min-length" className="block text-sm font-medium text-gray-700">
                      Minimum Password Length
                    </label>
                    <select
                      id="min-length"
                      name="min-length"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="8"
                    >
                      <option>6</option>
                      <option>8</option>
                      <option>10</option>
                      <option>12</option>
                    </select>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="require-uppercase"
                        name="require-uppercase"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="require-uppercase" className="font-medium text-gray-700">
                        Require uppercase letters
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="require-number"
                        name="require-number"
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="require-number" className="font-medium text-gray-700">
                        Require numbers
                      </label>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="require-special"
                        name="require-special"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="require-special" className="font-medium text-gray-700">
                        Require special characters
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Data Backup Settings */}
          {activeTab === 'backup' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Data Backup Settings</h2>
              <p className="mt-1 text-sm text-gray-500">
                Configure automatic backups to protect your important data.
              </p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="italic text-gray-500">Backup settings will be shown here.</p>
              </div>
            </div>
          )}

          {/* Policy Settings */}
          {activeTab === 'policies' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900">Company Policies</h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage HR policies, leave policies, and other company guidelines.
              </p>
              <div className="mt-4 border-t border-gray-200 pt-4">
                <p className="italic text-gray-500">Policy settings will be shown here.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
