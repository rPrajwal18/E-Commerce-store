import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import Navbar from './components/Navbar';
import OrderPage from './components/OrderPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white font-poppins">
      <Router>
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
      <footer className="footer bg-primary text-white text-center py-2">
        Developed by Prajwal R 🚀
      </footer>
    </div>
  );
}

export default App;

