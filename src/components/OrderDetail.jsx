import { GiToaster } from "react-icons/gi";
import { HiCalculator } from "react-icons/hi2";
import { HiX } from "react-icons/hi";


function Orderdetail() {
    return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col px-8 py-4 items-center w-full max-w-[600px] max-h-screen bg-gray-600">
        <div className="flex justify-between w-full max-w-md text-2xl font-extrabold">
            <span className="flex items-center gap-2"><GiToaster />order #1111</span>
            <span className="flex items-center gap-2"><HiCalculator />TBD:21</span>
        </div>
                
        <div className="border-2 mt-3 rounded my-12 p-8">
            <div className="flex justify-start ">
                <div className="flex flex-col">
                        <span>customer: ronaldooo</span>
                        <span>TBD:7</span>
                        <span>Phone No: N/A</span>
                </div>
            </div>
            <div className="m-12">
                <table>
                    <thead>
                        <tr>
                        <th className="border border-gray-300 px-4 py-2">Item</th>
                        <th className="border border-gray-300 px-4 py-2">Qty</th>
                        <th className="border border-gray-300 px-4 py-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">Burger</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2 flex items-center">$10<HiX />2</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">Pizza</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">$12</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">subtotal</td>
                        <td className="border border-gray-300 px-4 py-2">$300</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex">
                <span>Reject Order</span>
                <span>Mark as preparing</span>
            </div>
        </div>
      </div>
    </div>
    );
  }

export default Orderdetail;