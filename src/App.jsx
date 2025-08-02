import Navbar from './components/NavBar';
import Orderdetail from './components/OrderDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 text-black">
      <Navbar></Navbar>
      <Orderdetail></Orderdetail>
    </div>
  );
}

export default App;