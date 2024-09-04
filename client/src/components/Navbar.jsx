import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-primary font-poppins pt-5 pb-2 px-5 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-xl md:text-2xl font-semibold">Product Store 🤖</p>
        </div>
        <ul className="flex justify-center space-x-5">
          <li>
            <Link
              to="/"
              className="text-base md:text-lg pr-1 hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-base md:text-lg hover:text-gray-300 transition duration-300"
            >
              Create
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-base md:text-lg hover:text-gray-300 transition duration-300"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-base md:text-lg hover:text-gray-300 transition duration-300"
            >
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
