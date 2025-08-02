import Navbar from './components/NavBar';
import Order from './components/Order';
import Orderdetail from './components/OrderDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className='flex justify-center items-center w-full h-screen gap-4'>
        <Orderdetail></Orderdetail>
        <Order></Order>
      </div>
    </div>
  );
}

export default App;