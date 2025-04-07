import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate=useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-center p-6 text-white">
        <div className="bg-white bg-opacity-20 p-10 rounded-2xl shadow-lg backdrop-blur-md">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Employee Management</h1>
          <p className="text-xl mb-6">Manage your employees efficiently and effortlessly.</p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105" onClick={()=>navigate("/login")}>
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default WelcomePage;
  