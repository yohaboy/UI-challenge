import { HiCube } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoQrCodeOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Navbar() {
    return (
      <nav className="flex items-center justify-between px-8 py-4 shadow bg-black">
        <div className="text-2xl font-semibold">Order Sphere</div>
        <ul className="flex gap-8 text-md font-medium">
          <li><a href="#" className="hover:text-blue-600 flex items-center gap-1"><GoChecklist /> Orders</a></li>
          <li><a href="#" className="hover:text-blue-600 flex items-center gap-1"><MdOutlineMenuBook /> Menu</a></li>
          <li><a href="#" className="hover:text-blue-600 flex items-center gap-1"><HiCube />Products</a></li>
          <li><a href="#" className="hover:text-blue-600 flex items-center gap-1"><IoQrCodeOutline />QR Code</a></li>
          <li><a href="#" className="hover:text-blue-600 flex items-center gap-1"><BsPersonLinesFill />My Customers</a></li>
        </ul>
        <div className="flex gap-4 text-md">
          <a href="#" className="hover:text-blue-600 flex items-center gap-1"><IoPersonCircleOutline />Profile</a>
          <a href="#" className="hover:text-red-600 flex items-center gap-1"><RiLogoutCircleRLine />Logout</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  