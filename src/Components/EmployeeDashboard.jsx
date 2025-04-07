// EmployeeDashboard.jsx
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function EmployeeDashboard() {
    const attendanceData = [
      { day: "Mon", present: 8 },
      { day: "Tue", present: 9 },
      { day: "Wed", present: 7 },
      { day: "Thu", present: 8 },
      { day: "Fri", present: 9 },
    ];
  
    const taskData = [
      { name: "Completed", value: 60 },
      { name: "Pending", value: 30 },
      { name: "Overdue", value: 10 },
    ];
  
    const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];
  
    return (
      <div className="space-y-8">
        <h1 className="text-2xl font-semibold">Welcome, Employee</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attendance Chart */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Attendance This Week</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={attendanceData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="present" fill="#8884d8" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
  
          {/* Task Pie Chart */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-bold mb-2">Task Summary</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={taskData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {taskData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
  