// EmployeeDashboard.jsx
import { Briefcase, Mail, MapPin, Phone, User, BadgeCheck, Calendar, Clock3, UserCheck, Edit3, Home } from "lucide-react";

export default function EmployeeDashboard() {
  const employee = {
    name: "Aryan Sharma",
    position: "Frontend Developer",
    email: "aryan.sharma@example.com",
    phone: "+91 9876543210",
    department: "Engineering",
    location: "Jhunjhunu, Rajasthan",
    address: "123, Tech Street, Jhunjhunu, Rajasthan, India",
    employeeId: "EMP1024",
    joinDate: "2023-06-15",
    totalTime: "1 yr 2 mo",
    managerName: "Ravi Mehta"
  };

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-gray-800">Welcome, {employee.name}</h1>

      {/* Modern Employee Profile Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl p-1 shadow-xl">
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-32 h-32">
              <img
                src={`https://ui-avatars.com/api/?name=${employee.name.replace(" ", "+")}&background=0D8ABC&color=fff&size=128`}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
          </div>
          <div className="text-gray-800 w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600" /> {employee.name}
              </h2>
              <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                <Edit3 className="w-4 h-4" /> Edit Profile
              </button>
            </div>
            <p className="text-base font-medium text-blue-700 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> {employee.position}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
              <p className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-gray-600" /> ID: {employee.employeeId}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-600" /> {employee.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-600" /> {employee.phone}
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-600" /> {employee.department}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" /> {employee.location}
              </p>
              <p className="flex items-center gap-2">
                <Home className="w-5 h-5 text-gray-600" /> {employee.address}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" /> Joined: {employee.joinDate}
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="w-5 h-5 text-gray-600" /> Experience: {employee.totalTime}
              </p>
              <p className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-gray-600" /> Manager: {employee.managerName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
