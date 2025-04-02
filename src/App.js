import Attendance from "./Components/Attendance";
import Dashboard from "./Components/Dashboard";
import Departments from "./Components/Departments";
import Employees from "./Components/Employees";
import Leave from "./Components/Leave";
import MainLayout from "./Components/MainLayOut";
import { Routes, Route, Navigate } from 'react-router-dom';
import Reports from "./Components/Reports";
import Settings from "./Components/Settings";



function App() {
  return (
    <div className="">
    {/* <MainLayout/> */}
    <Routes>
      <Route path="/" element={<MainLayout/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="employees" element={<Employees />} />
      <Route path="departments" element={<Departments />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="leave" element={<Leave />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />









    </Routes>
    </div>
  );
}

export default App;
