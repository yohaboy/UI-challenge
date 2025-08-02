import { GiToaster } from "react-icons/gi";
import { HiCalculator } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

const items = [
  { name: "Burger", qty: 2, price: 10 },
  { name: "Pizza", qty: 1, price: 12 },
  { name: "Injera", qty: 1, price: 8 },
  
];

function Orderdetail() {

 const textureStyle = {
        backgroundImage: 'url("/assets/surface.png")',
        backgroundColor: '#FFFDD0',
    };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col px-8 py-4 items-center w-full max-w-[800px] max-h-screen border-2 border-amber-200 rounded-lg" style={textureStyle}>
        <div className="flex justify-between w-full text-2xl font-extrabold">
          <span className="flex items-center gap-2">
            <GiToaster />
            order #1208
          </span>
          <span className="flex items-center gap-2">
            <HiCalculator />
            TBD:21
          </span>
        </div>

        <div className="border-2 mt-3 rounded my-12 p-10 mx-10 w-[750px]">
          <div className="flex justify-start text-xl">
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                <GoDotFill />
                customer: ronaldooo
              </span>
              <span className="flex items-center gap-2">
                <GoDotFill />
                TBD:7
              </span>
              <span className="flex items-center gap-2">
                <GoDotFill />
                Phone No: N/A
              </span>
            </div>
          </div>

          <div className="m-12">
            <table className="w-full table-auto">
              <thead className="text-xl font-bold">
                <tr className="border-b-2 border-black">
                  <th className="w-[400px] px-4 py-2 text-left">Item</th>
                  <th className="px-4 py-2 text-center">Qty</th>
                  <th className="px-4 py-2 text-center">Price</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {items.map((item, index) => (
                  <tr key={index} className="border-b-2 border-black">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="text-center px-4 py-2">{item.qty}</td>
                    <td className="text-center px-4 py-2 flex items-center justify-center gap-1">
                      ${item.price}
                      {item.qty > 1 && (
                        <>
                          <HiX />
                          {item.qty}
                        </>
                      )}
                    </td>
                  </tr>
                ))}

                <tr className="border-b-2 border-black">
                  <td className="text-center px-4 py-2"></td>
                  <td className="text-center px-4 py-2">
                    <div className="pt-6">
                      <div>subtotal</div>
                      <div>Tax</div>
                    </div>
                  </td>
                  <td className="text-center px-4 py-2">
                    <div className="pt-6">
                      <div>$340</div>
                      <div>15%</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="text-center px-4 py-2"></td>
                  <td className="text-center px-4 py-2 font-bold">Total</td>
                  <td className="text-center px-4 py-2 font-bold">$1200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between px-4 text-lg font-bold">
            <span className="flex items-center gap-2 hover:cursor-pointer hover:bg-red-300 border-3 p-4 rounded"><MdOutlineCancel size={24} color="red" />Reject Order</span>
            <span className="flex items-center gap-2 hover:cursor-pointer hover:bg-green-300 border-3 p-4 rounded"><ImCheckmark size={24} color="green"/>Mark as preparing</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderdetail;
