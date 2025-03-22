import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 text-white">
        <div className="space-x-4">
            <NavLink to="/" className="hover:text-gray-200">
               Home
           </NavLink>
          <NavLink to="/login" className="hover:text-gray-200">
            Login
          </NavLink>
          <NavLink to="/fav" className="hover:text-gray-200">
            Favourites
          </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;