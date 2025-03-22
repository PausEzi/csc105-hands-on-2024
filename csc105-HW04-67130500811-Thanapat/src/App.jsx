import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">

      <Navbar />


      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;