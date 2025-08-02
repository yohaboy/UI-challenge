import Navbar from './components/NavBar';
import Orderdetail from './components/OrderDetail';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-black">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Orderdetail></Orderdetail>
    </div>
  );
}

export default App;