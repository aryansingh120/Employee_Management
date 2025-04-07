import { Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import MainLayout from "./Components/MainLayOut";
import Attendance from "./Components/Attendance";
import Dashboard from "./Components/Dashboard";
import Departments from "./Components/Departments";
import Employees from "./Components/Employees";
import Leave from "./Components/Leave";
import Reports from "./Components/Reports";
import Settings from "./Components/Settings";
import LoginPage from "./Components/LoginPage";
import AuthSuccess from "./Components/AuthSuccess";
import Signup from "./Components/SignUp";
import Register from "./Components/Register";
import EmployeeLayout from "./Components/EmployeeLayout";
import EmployeeDashboard from "./Components/EmployeeDashboard";
import Profile from "./Components/Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<WelcomePage />} />

      <Route path="/mainLayout" element={<MainLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="/mainLayout/dashboard" element={<Dashboard />} />
        <Route path="/mainLayout/employees" element={<Employees />} />
        <Route path="/mainLayout/departments" element={<Departments />} />
        <Route path="/mainLayout/attendance" element={<Attendance />} />
        <Route path="/mainLayout/leave" element={<Leave />} />
        <Route path="/mainLayout/reports" element={<Reports />} />
        <Route path="/mainLayout/settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/authSuccess" element={<AuthSuccess />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      

       <Route path="/employee" element={<EmployeeLayout />}>
        Nested route - Dashboard
        <Route index element={<EmployeeDashboard />} />
        <Route path="/employee/profile" element={<Profile />} />

        {/* Yahan baad me Profile, Attendance wagaira add ho sakti hai */}
      </Route>






    </Routes>
  );
}

export default App;
