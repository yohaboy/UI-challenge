import Navbar from './components/NavBar';
import Orderdetail from './components/OrderDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar></Navbar>
      <Orderdetail></Orderdetail>
    </div>
  );
}

export default App;