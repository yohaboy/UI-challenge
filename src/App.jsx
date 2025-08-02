import Navbar from './components/NavBar';
import Order from './components/Order';
import Orderdetail from './components/OrderDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#222222] text-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className='flex items-start justify-center w-full h-screen gap-4 mt-8'>
        <Orderdetail></Orderdetail>
        <Order></Order>
      </div>
    </div>
  );
}

export default App;