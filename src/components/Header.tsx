import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          YourLogo
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link to="/cart" className="text-gray-300 hover:text-white">
            Cart
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
