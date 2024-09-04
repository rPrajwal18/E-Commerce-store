import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-primary font-poppins pt-7 pb-1 px-10">
    <div className="max-w-5xl mx-auto flex items-center justify-between">
    <div>
      <p className="text-2xl font-semibold">Product Store 🤖</p>
    </div>
    <ul className="flex space-x-7 ">
        <li>
            <Link
            to="/"
            className="text-lg pr-1 hover:text-gray-300 transition duration-300"
            >
            Home
            </Link>
        </li>
      <li>
        <Link
          to="/create"
          className="text-lg hover:text-gray-300 transition duration-300"
        >
          Create
        </Link>
      </li>
      <li>
        <Link
          to="/cart"
          className="text-lg hover:text-gray-300 transition duration-300"
        >
          Cart
        </Link>
      </li>
      <li>
        <Link
          to="/orders"
          className="text-lg hover:text-gray-300 transition duration-300"
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
